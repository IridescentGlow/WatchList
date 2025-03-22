import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddPage from "./pages/AddPage"
import Navigation from "./pages/Navigation"
import WatchedPage from "./pages/WatchedPage"
import WatchListPage from './pages/WatchListPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <WatchListPage />
    },
    {
      path: '/add',
      element: <AddPage />
    },
    {
      path: '/watched',
      element: <WatchedPage />
    },
    {
      path: '/navigation',
      element: <Navigation />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
