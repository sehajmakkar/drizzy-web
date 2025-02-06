import React from 'react'
import { useEffect } from 'react'
import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import Refund from './components/Refund'
import HomePage from './components/HomePage'
import { initializePixel } from './utils/pixel';



const App = () => {

  useEffect(() => {
    initializePixel();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/terms",
      element: <Terms />,
    },
    {
      path: "/privacy-policy",
      element: <Privacy />,
    },
    {
      path: "/refund",
      element: <Refund />,
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App