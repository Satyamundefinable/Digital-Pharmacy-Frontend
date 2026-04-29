import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContext } from './Context/authContext.js'
import AuthContextProvider from './Context/AuthContextProvider.jsx'
import MedicineContextProvider from './Context/MedicineContextProvider.jsx'
// import AuthContextProvider from './Context/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <MedicineContextProvider>
      <App />
    </MedicineContextProvider>
  </AuthContextProvider>
)