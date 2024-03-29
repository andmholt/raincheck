
import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            dark: '#ff0a54',
            main: '#282828',
            light: '#404040',
        },
        secondary: {
            dark: '#431c00',
            main: '#ff0a54',
            light: '#a97f58'
        },
        background: {
            default: '#ffffff'
        },
        success: {
            dark: '#388e3c',
            main: '#66bb6a',
            light: '#81c784',
        }
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
})
// const darkTheme = createTheme({
//     palette: {
//         primary: {
//             main: '#19446e',
//             light: '#e4f0f5',
//         },
//         secondary: {
//             dark: '#431c00',
//             main: '#6e4419',
//             light: '#a97f58'
//         },
//         background: {
//             default: '#292929',
//         },
//         success: {
//             dark: '#388e3c',
//             main: '#66bb6a',
//             light: '#81c784',
//         }
//     },
//     typography: {
//         fontFamily: [
//           '-apple-system',
//           'Montserrat',
//           'BlinkMacSystemFont',
//           '"Segoe UI"',
//           'Roboto',
//           '"Helvetica Neue"',
//           'Arial',
//           'sans-serif',
//           '"Apple Color Emoji"',
//           '"Segoe UI Emoji"',
//           '"Segoe UI Symbol"',
//         ].join(','),
//       },
// })