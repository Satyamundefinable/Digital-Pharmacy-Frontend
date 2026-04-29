import React, { useState } from 'react'
import MedicineContext from './medicineContext';

const MedicineContextProvider = ({children}) => {
    const [medicines, setMedicines] = useState([]);
  return (
<>
<MedicineContext.Provider value={{medicines, setMedicines}}>
{children}
</MedicineContext.Provider>
</>
)
}

export default MedicineContextProvider