import { useContext, useEffect } from 'react'
import axios from "axios"
import MedicineCard from './MedicineCard.jsx'
import apiURL from '../Constants/constant.js';
import { AuthContext } from '../Context/authContext.js';

const Medicines = () => {

  const { medicines, setMedicines } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`${apiURL}/medicines/medicine`)
      .then((result) => {
        console.log(result.data)
        setMedicines(result.data.medicines)

      }).catch((err) => {
        console.error(err)

      });
  }, [setMedicines])
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
      {
        medicines && medicines.map((med) => (
          <MedicineCard key={med._id} medicineId={med._id} medicine={med} />
        ))

      }
    </div>
  )
}

export default Medicines