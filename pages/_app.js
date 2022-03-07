import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import GlobalLoadingIndicator from '../components/GlobalLoadingIndicator'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalLoadingIndicator />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
