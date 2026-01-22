import React, { useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import store from './store'

function Main() {
  const [mode, setMode] = useState('light')

  const theme = useMemo(() =>
    createTheme({
    palette: {
  mode,
  primary: {
    main: mode === 'light' ? '#a105b6ff' : '#c911eeff', // أزرق رئيسي لللايت، أزرق فاتح للدارك
    contrastText:mode === 'light' ?'#ffffffff' : '#000000', // لون النص على الأزرار
  },
  background: {
    default: mode === 'light' ? '#e59df380' : '#000000', // الأبيض لللايت، الأسود للدارك
    paper: mode === 'light' ? '#ffffff' : '#121212',   // البطاقات
  },
  text: {
    primary: mode === 'light' ? '#584e58ff' : '#ffffff', // النص الرئيسي: أزرق لللايت، أبيض للدارك
    secondary: mode === 'light' ? '#4e4d4eff' : '#b0b0b0', // النص الثانوي
  },
  divider:{
            main: mode === 'light' ? '#3a04327c' : '#d8bfbfff', // لون خلفية  

  }
},

      typography: {
        fontFamily: 'CairoBlack, Arial, sans-serif',
      },
       navbar: {
        main: mode === 'light' ? '#f5c2ed7c' : '#121212', // لون خلفية  
        contrastText: mode === 'light' ? '#c319d2ff' : '#521f4dff', // لون النص والأيقونات
        hover: mode === 'light' ? '#f8e3fdff' : '#1f1f1f', // عند التحويم
        border: mode === 'light' ? '#c319d2ff' : '#b56ef0ff',
        span:mode === 'light' ? '#700a99ff' : '#ffffff',
                body: mode === 'light' ? '#c2e0f52c' : '#000000',
                 body1: mode === 'light' ? '#3b4044b2' : '#ffffff',
                // لون خلفية  البودي
button:mode === 'light' ? '#ffffff' : '#9819d2ff',
            Text:mode === 'light' ? '#000000' :'#ad19d2ff' ,  
               paper: mode === 'light' ? '#ffffff' : '#121212', 
               icon:mode=== 'light' ? '#3b4044b2' : '#cc19d2ff', //ت
// لون النص مخصص  

      },
    }),
    [mode]
  )

  const toggleMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App toggleMode={toggleMode} mode={mode} />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
