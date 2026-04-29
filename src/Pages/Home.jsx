import Medicines from './Medicines'
import MedicineCard from './MedicineCard'
// import Login from './Login'
import MedicineDashboard from './MedicineDashboard'
import MedicineContextProvider from '../Context/MedicineContextProvider'
import MyCart from './MyCart.jsx'
// import MedicineContext from '../Context/medicineContext'

const Home = () => {
  // const {medicines} =useContext(MedicineContext);
  //  console.log(medicines);
  return (
  <>
    <MedicineContextProvider/>
      
    <div>
       Home 
       <Medicines/>
       <div>
        {/* <MedicineCard/> */}
       
       </div>
       {/* <Login/> */}
<MedicineDashboard/>

    </div>
  </>

  )
}

export default Home