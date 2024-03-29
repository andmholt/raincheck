import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
// import { theme } from './config'
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { ScrollToTop } from './ScrollToTop'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { theme } from './config'
import { Home } from './Home'

const queryClient = new QueryClient()

export const App = () => {
	return (
        <QueryClientProvider client={queryClient}>
            <div style={{width: '100%', height: '100%', position: 'absolute', padding: 0, top: 0, left: 0, boxSizing: 'border-box'}} data-testid='app'>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes>

                            <Route path='/' element={<Home />} />

                            {/* <Route path='*' element={<NotFound />} /> */}

                        </Routes>
                        <ScrollToTop />
                    </BrowserRouter>
                </ThemeProvider>
            </div>
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
	)
}