
import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        // https://coolors.co/palette/461873-58148e-6910a8-8c07dd-9f21e3-b333e9-cb5df1-dc93f6-eabffa-f7ebfd
        primary: {
            dark: '#58148e',
            main: '#8c07dd',
            light: '#eabffa',
        },
        secondary: {
            dark: '#404040',
            main: '#808080',
            light: '##f5f5f5'
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