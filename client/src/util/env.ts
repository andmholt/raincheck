export const getApiBaseUrl = () => {
    const endpoint = process.env.REACT_APP_API_BASE_URL
    if (endpoint === undefined) throw new Error('REACT_APP_API_BASE_URL not defined')
    return endpoint
}