import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './context/AuthContext'
import { SearchContextProvider } from './context/SearchContextProvider'

import App from './pages/App/App'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
