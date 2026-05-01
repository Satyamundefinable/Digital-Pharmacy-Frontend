import Medicines from './Medicines'
import MedicineCard from './MedicineCard'
// import Login from './Login'
import MedicineDashboard from './MedicineDashboard'
import MedicineContextProvider from '../Context/MedicineContextProvider'
import MyCart from './MyCart.jsx'
import { useContext } from 'react'
import { AuthContext } from '../Context/authContext.js'
// import MedicineContext from '../Context/medicineContext'

const Home = () => {

  const { user } = useContext(AuthContext)
  // const {medicines} =useContext(MedicineContext);
  //  console.log(medicines);
  return (
    <>
      <MedicineContextProvider />

      <div>
        <h1>Home</h1>
        <h3>Welcome back : {user}</h3>
        <Medicines />
        <MedicineDashboard />
      </div>
    </>

  )
}

export default Home