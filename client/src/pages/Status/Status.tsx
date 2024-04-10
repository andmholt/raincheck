import { Box, Container, Typography } from '@mui/material'
import { useStatus } from './useStatus'
import { StatusPending } from '@/components'

export const Status = () => {
    const { status } = useStatus()
    return <StatusPending />
}