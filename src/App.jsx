import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import AppLayout from './Components/LayOut/AppLayout.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import VerifyOtp from './Pages/VerifyOtp.jsx'
import MyCart from './Pages/MyCart.jsx'
import PasswordResetOtpVerificationPage from './Pages/PasswordResetOtpVerificationPage.jsx'
import PasswordResetPage from './Pages/PasswordResetPage.jsx'
import CreateNewPassword from './Pages/CreateNewPassword.jsx'

const App = () => {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />
            },
            {
              path: "/contact",
              element: <Contact />
            },
            {
              path: "/verify-otp",
              element: <VerifyOtp />
            },
            {
              path: "/my-cart",
              element: <MyCart />
            }
          ]
        },
        {
          path: "/login",
          element: <Login />,

        },
        {
          path: "/reset-password",
          element: <PasswordResetPage />
        },
        {
          path: "/verify-password-reset-otp",
          element: <PasswordResetOtpVerificationPage />
        },
        {
          path: "/create-new-password",
          element: <CreateNewPassword />
        },

      ]
    }
  ])

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App