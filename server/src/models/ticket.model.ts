import { pgTable, boolean, varchar, date, integer, uuid } from 'drizzle-orm/pg-core'

export const tickets = pgTable('ticket', {
    id: uuid('id').primaryKey().defaultRandom(),
    phoneA: varchar('phone_a').notNull(),
    phoneB: varchar('phone_b').notNull(),
    meetupDate: date('meetup_date', { mode: 'date' }).notNull(),
    phoneACode: integer('phone_a_code').notNull(),
    phoneBCode: integer('phone_b_code').notNull(),
    phoneAVerified: boolean('phone_a_verified').notNull().default(false),
    phoneBVerified: boolean('phone_b_verified').notNull().default(false)
})

export type Ticket = typeof tickets.$inferSelect
export type NewTicket = typeof tickets.$inferInsert