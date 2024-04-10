import { getDbHost, getDbName, getDbPassword, getDbPort, getDbUser, getDbSslCaStr } from '@/util'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'

const client = new Client({
    host: getDbHost(),
    port: getDbPort(),
    user: getDbUser(),
    password: getDbPassword(),
    database: getDbName(),
    ssl: {
        ca: getDbSslCaStr()
    }
})

client.connect()

export const db = drizzle(client)