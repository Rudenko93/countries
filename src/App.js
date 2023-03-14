import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Details } from "./pages/Details"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Home /> },
      { path: "details", element: <Details /> },
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">Home</div>
    </RouterProvider>
  )
}

export default App
