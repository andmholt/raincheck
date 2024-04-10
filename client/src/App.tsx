import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { ScrollToTop } from './ScrollToTop'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { theme } from './config'
import { Landing, Privacy, Terms, Verify, Status } from '@/pages'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const queryClient = new QueryClient()

export const App = () => {
	return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <QueryClientProvider client={queryClient}>
                    <ThemeProvider theme={theme}>
                        <div style={{width: '100%', height: '100%', position: 'absolute', padding: 0, top: 0, left: 0, boxSizing: 'border-box'}} data-testid='app'>
                            <BrowserRouter>
                                <Routes>
                                    <Route path='/' element={<Landing />} />
                                    <Route path='/verify/:ticketId' element={<Verify />} />
                                    <Route path='/status/:ticketId' element={<Status />} />
                                    <Route path='/terms' element={<Terms />} />
                                    <Route path='/privacy' element={<Privacy />} />
                                    {/* <Route path='*' element={<NotFound />} /> */}
                                </Routes>
                                <ScrollToTop />
                            </BrowserRouter>
                        </div>
                    </ThemeProvider>
            <ReactQueryDevtools />
            </QueryClientProvider>
        </LocalizationProvider>
	)
}