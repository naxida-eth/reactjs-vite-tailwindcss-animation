import Layout from 'layout'
import Home from 'pages/Home'
import { createBrowserRouter } from 'react-router-dom'

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])
