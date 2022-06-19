import { QueryClient, QueryClientProvider } from 'react-query'
import HomePage from './pages/homepage/homepage.component'

const queryClient = new QueryClient()

export default function App() {
   return (
     <QueryClientProvider client={queryClient}>
       <HomePage />
     </QueryClientProvider>
   )
}
