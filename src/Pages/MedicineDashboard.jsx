import { useContext, useState } from 'react'
import MedicineContext from '../Context/medicineContext';
import MedicineCard from './MedicineCard';

const MedicineDashboard = () => {

    const { medicines } = useContext(MedicineContext);

    const [selectedCategory, setSelectedCategory] = useState("all")

    const filteredMedicines = selectedCategory === "all" ? medicines :
        medicines.filter((item) =>
            item.form.toLowerCase() === selectedCategory.toLowerCase());
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: 'column', gap: "1rem" }}>
                <p style={{ cursor: "pointer", fontSize: "2rem", padding: ".1em 2em", background: "#000", color: "#fff", borderRadius: "5px" }} onClick={() => setSelectedCategory("tablet")}>Tablets</p>
                <p style={{ cursor: "pointer", fontSize: "2rem", padding: ".1em 2em", background: "#000", color: "#fff", borderRadius: "5px" }} onClick={() => setSelectedCategory("Syrup")}>Syrups</p>
                <p style={{ cursor: "pointer", fontSize: "2rem", padding: ".1em 2em", background: "#000", color: "#fff", borderRadius: "5px" }} onClick={() => setSelectedCategory("capsules")}>Capsules</p>
                <p style={{ cursor: "pointer", fontSize: "2rem", padding: ".1em 2em", background: "#000", color: "#fff", borderRadius: "5px" }} onClick={() => setSelectedCategory("lotion")}>Lotions</p>
                <p style={{ cursor: "pointer", fontSize: "2rem", padding: ".1em 2em", background: "#000", color: "#fff", borderRadius: "5px" }} onClick={() => setSelectedCategory("powder")}>Powders</p>
                <p style={{ cursor: "pointer", fontSize: "2rem", padding: ".1em 2em", background: "#000", color: "#fff", borderRadius: "5px" }} onClick={() => setSelectedCategory("ointment")}>Ointments</p>
            </div>
            <hr />


            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {/* {filteredMedicines.length} */}
                {
                    filteredMedicines.length > 0 ?
                        filteredMedicines?.map((item) => (
                            <MedicineCard key={item._id} medicine={item} />
                        )) :
                        <div >
                            <p>No Medicines Found</p>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>

                                {

                                    medicines.map((item) => (

                                        <MedicineCard key={item._id} medicine={item} />

                                    ))
                                }
                            </div>
                        </div>
                }
            </div>

        </div>
    )
}

export default MedicineDashboard