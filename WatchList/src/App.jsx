import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddPage from "./pages/AddPage"
import Navigation from "./pages/Navigation"
import WatchedPage from "./pages/WatchedPage"
import WatchListPage from './pages/WatchListPage'
import GlobalProvider from "./context/GlobalState"
import './index.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <GlobalProvider>
        <WatchListPage />
      </GlobalProvider>
    },
    {
      path: '/add',
      element: <GlobalProvider>
        <AddPage />
      </GlobalProvider> 
    },
    {
      path: '/watched',
      element: <GlobalProvider>
        <WatchedPage />
      </GlobalProvider> 
    },
    {
      path: '/navigation',
      element: <GlobalProvider>
        <Navigation />
      </GlobalProvider> 
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
