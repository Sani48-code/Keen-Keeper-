import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { FriendsProvider } from './context/FriendsContext'
import { TimelineProvider } from './context/TimelineContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FriendsProvider>
        <TimelineProvider>
          <App />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3500,
              style: {
                background: '#1B4332',
                color: '#ffffff',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '14px',
                fontWeight: '500',
              },
              success: {
                iconTheme: { primary: '#D1FAE5', secondary: '#1B4332' },
              },
            }}
          />
        </TimelineProvider>
      </FriendsProvider>
    </BrowserRouter>
  </StrictMode>
)
