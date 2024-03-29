import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './Store/Store.js'
import './index.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Register-And-Login/Login.jsx'
import Register from './components/Register-And-Login/Register.jsx'
import { Provider } from 'react-redux'
import PrivacyPolicy from './components/Privacy/PrivacyPolicy.jsx'
import Faq from './components/Faq/Faq.jsx'
import HotelDetail from './components/Search/HotelDetail.jsx'
import Terms from './components/Terms/Terms.jsx'

// Pages
import Home from './pages/Home'
import Dev from './dev/index.jsx'
import { devRoutes } from './dev/devRoutes.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/hotel'} />,
      },
      {
        path: '/hotel',
        element: <Home />,
      },
      {
        path: '/flight',
        element: <Home />,
      },
      {
        path: '/transportation',
        element: <Home />,
      },
      {
        path: '/dev',
        element: <Dev />,
      },
      ...devRoutes.map((route) => {
        const Page = route.page
        return {
          path: `/dev/${route.name}`,
          element: <Page />,
        }
      }),
      {
        path: '/description',
        element: <HotelDetail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <Register />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/terms',
        element: <Terms />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
