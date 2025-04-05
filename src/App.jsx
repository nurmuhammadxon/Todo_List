import { createBrowserRouter, RouterProvider } from "react-router-dom"

// layouts
import RootLayout from "./layouts/RootLayout"

// pages
import ErrorPage from "./pages/ErrorPage"
import ImportantTodo from "./pages/ImportantTodo"
import CompletedTodo from "./pages/CompletedTodo"
import TrashTodo from "./pages/TrashTodo"
import AddTodo from "./pages/AddTodo"
import Dashboard from "./pages/Dashboard"
import AllTodo from "./pages/AllTodo"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: '/all',
          element: <AllTodo />
        },
        {
          path: '/important',
          element: <ImportantTodo />
        },
        {
          path: "/completed",
          element: <CompletedTodo />
        },
        {
          path: '/trash',
          element: <TrashTodo />
        },
        {
          path: '/add',
          element: <AddTodo />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
