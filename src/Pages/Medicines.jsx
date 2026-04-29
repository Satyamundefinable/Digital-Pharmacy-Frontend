import { useContext, useEffect} from 'react'
import axios from "axios"
import MedicineCard from './MedicineCard'
import MedicineContext from '../Context/medicineContext.js';
import apiURL from '../Constants/constant.js';
// import MedicineContext from '../Context/medicineContext'

const Medicines = () => {
    // const {medicines, setMedicines} = useContext(MedicineContext);
    // const [medicines, setMedicines] = useState([]);

    const {medicines, setMedicines} = useContext(MedicineContext);

     useEffect(()=> {
    axios.get(`${apiURL}/medicines/medicine`)
    .then((result) => {
      console.log(result.data)
      setMedicines(result.data.medicines)
      
    }).catch((err) => {
      console.error(err)
      
    });
  },[setMedicines])
  return (
    <div style={{display : "flex", justifyContent : "space-evenly", flexWrap : "wrap"}}>
        {
        medicines.map((med) => (
            // <MedicineCard key={med._id} medicine={med} />
            <MedicineCard key={med._id} medicineId={med._id} medicine={med} />
        ))

        }
    </div>
  )
}

export default Medicines