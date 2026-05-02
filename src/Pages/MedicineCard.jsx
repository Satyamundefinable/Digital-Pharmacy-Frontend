import axios from "axios";
import "../Style/MedicineCard.css";
import apiURL from "../Constants/constant";

const MedicineCard = ({ medicine, medicineId }) => {

  // console.log(medicineId);
  
  // const [success, setSuccess] = useState("")
   
    const addToCart =  async () => {
     await axios.post(`${apiURL}/medicines/add-medicine`,{medicineId},
      {
        withCredentials : true
      }
     )
   .then((res) => {
     if (res.data.success) {
       alert("Item Added in Cart Successfully");
      //  console.log(res.data)
    }
   })
   .catch(err =>  console.log(err));
    }
  
   if (!medicine) return null;

  return (
    <div className="medicine-card">
      {/* <p>{success}</p> */}
      <div className="card-header">
        <h3 className="medicine-name">{medicine?.medicineName}</h3>
        <span className="expiry"> <strong>
          {medicine?.companyName}
        </strong></span>
      </div>

      <div className="card-body">
        <p><strong>Category:</strong> {medicine?.category}</p>
        <p><strong>Form:</strong> {medicine?.form}</p>
        <p><strong>Price:</strong> ₹{medicine?.price}</p>
        <p><strong>Stock:</strong> {medicine?.stock || "0"}</p>
        <p><strong>Prescription :</strong> {medicine.prescription === true ? "Required" : "Not Required"}</p>
      </div>

      <div className="card-footer">
        <button  className="btn view-btn">View</button>
        <button onClick={addToCart}  className="btn add-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default MedicineCard;