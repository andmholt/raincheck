import fs from 'fs'

export const getDbSslCaStr = () =>
    fs.readFileSync('./ca-certificate.crt').toString()