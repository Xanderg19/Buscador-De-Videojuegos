import './App.css'
import { SearchProvider } from './context/searchContext'
import AppRouter from './router/AppRouter'


function App() {
  return (
    <SearchProvider>
       <AppRouter />
    </SearchProvider>
   
  )
}

export default App
