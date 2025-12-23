import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next'
import i18n from './config/i18n.tsx'
import ClearCacheApp from './ClearCacheApp.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <AuthProvider>
          <ClearCacheApp/>
        </AuthProvider>
      </StrictMode>
    </QueryClientProvider>
  </I18nextProvider>
)
