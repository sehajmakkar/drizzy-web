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
// import { initializePixel } from './utils/pixel';
import { useMetaPixel } from './hooks/useMetaPixel';



const App = () => {

  // useEffect(() => {
  //   initializePixel();
  // }, []);

  useMetaPixel();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/t&c",
      element: <Terms />,
    },
    {
      path: "/privacy",
      element: <Privacy />,
    },
    {
      path: "/c&r",
      element: <Refund />,
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App