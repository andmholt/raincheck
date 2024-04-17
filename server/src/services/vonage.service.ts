import { getVonageApiKey, getVonageApiSecret, getVonageFromPhone } from '@/util'
import { Vonage } from '@vonage/server-sdk'
import { Auth } from '@vonage/auth'

const auth = new Auth({
    apiKey: getVonageApiKey(),
    apiSecret: getVonageApiSecret()
})

const vonage = new Vonage(auth)


interface SendSmsParams {
    to: string
    text: string
}

const from = getVonageFromPhone()

export const vonageService = {

    /**
     * Sends the `text` as sms to the provided phone.
     */
    sendSms: async ({
        to,
        text
    }: SendSmsParams) =>{
        const res = await vonage.sms.send({
            to,
            from,
            text
        })
        console.log(res)
    }
}