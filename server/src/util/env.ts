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