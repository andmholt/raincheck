export const getProfile = (): string => {
    const profile = process.env.NODE_ENV
    if (!profile) throw new Error('NODE_ENV is not defined')
    return profile
}

export const getIsProd = (): boolean => {
    return getProfile() === 'production'
}

export const getIsDev = (): boolean => {
    return getProfile() === 'development'
}

export const getOrigin = (): string => {
    const origin = process.env.ORIGIN
    if (!origin) throw new Error('ORIGIN is not defined')
    return origin
}

export const getClientOrigin = (): string => {
    const origin = process.env.CLIENT_ORIGIN
    if (!origin) throw new Error('CLIENT_ORIGIN is not defined')
    return origin
}

export const getDbHost = (): string => {
    const host = process.env.DB_HOST
    if (!host) throw new Error('DB_HOST is not defined')
    return host
}

export const getDbPort = (): number => {
    const port = process.env.DB_PORT
    if (!port) throw new Error('DB_PORT is not defined')
    return parseInt(port)
}

export const getDbUser = (): string => {
    const user = process.env.DB_USER
    if (!user) throw new Error('DB_USER is not defined')
    return user
}

export const getDbPassword = (): string => {
    const password = process.env.DB_PASSWORD
    if (!password) throw new Error('DB_PASSWORD is not defined')
    return password
}

export const getDbName = (): string => {
    const name = process.env.DB_NAME
    if (!name) throw new Error('DB_NAME is not defined')
    return name
}

export const getVonageApiKey = (): string => {
    const key = process.env.VONAGE_API_KEY
    if (!key) throw new Error('VONAGE_API_KEY is not defined')
    return key
}

export const getVonageApiSecret = (): string => {
    const secret = process.env.VONAGE_API_SECRET
    if (!secret) throw new Error('VONAGE_API_SECRET is not defined')
    return secret
}

export const getVonageFromPhone = (): string => {
    const from = process.env.VONAGE_FROM_PHONE
    if (!from) throw new Error('VONAGE_FROM_PHONE is not defined')
    return from
}