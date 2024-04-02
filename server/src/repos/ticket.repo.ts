import { db } from '@/database'
import { NewTicket, Ticket, tickets } from '@/models'
import { eq, and } from 'drizzle-orm'


type FindOneParams = {
    phoneA: string
    phoneB: string
    meetupDate: Date
}

type FindOneByIdParams = {
    ticketId: string
}

export const ticketRepo = {

    /**
     * Creates a new ticket
     */
    create: async (ticket: NewTicket) => db
        .insert(tickets)
        .values(ticket)
        .returning(),

    /**
     * Try to find a matching ticket
     */
    findOne: async ({
        phoneA,
        phoneB,
        meetupDate
    }: FindOneParams) => {
        const tick = await db
            .select()
            .from(tickets)
            .where(
                and(
                    eq(tickets.phoneA, phoneA),
                    eq(tickets.phoneB, phoneB),
                    eq(tickets.meetupDate, meetupDate)
                )
            )
        if (tick.length > 0) {
            return tick[0]
        } else {
            return null
        }
    },

    /**
     * Find one ticket by id
     */
    findOneById: async ({
        ticketId
    }: FindOneByIdParams) => (await db
        .select()
        .from(tickets)
        .where(eq(tickets.id, ticketId)))[0] as Ticket | undefined,

    /**
     * set `phoneAVerified` to `true`
     */
    setPhoneAVerified: async () => await db
        .update(tickets)
        .set({ phoneAVerified: true }),

    /**
     * set `phoneBVerified` to `true`
     */
    setPhoneBVerified: async () => await db
        .update(tickets)
        .set({ phoneBVerified: true })
}