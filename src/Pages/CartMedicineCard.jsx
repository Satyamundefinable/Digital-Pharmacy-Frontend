

const CartMedicineCard = ({ medicine, quantity }) => {
  if (!medicine) return null;

  return (
    <div className="medicine-card">
      <div className="card-header">
        <h3 className="medicine-name">{medicine?.medicineName}</h3>
        <span className="expiry">
          <strong>{medicine?.companyName}</strong>
        </span>
      </div>

      <div className="card-body">
        <p><strong>Category:</strong> {medicine?.category}</p>
        <p><strong>Form:</strong> {medicine?.form}</p>
        <p><strong>Price:</strong> ₹{medicine?.price}</p>
        <p><strong>Quantity:</strong> {quantity || 0}</p>
        <p>
          <strong>Prescription :</strong>{" "}
          {medicine?.prescription ? "Required" : "Not Required"}
        </p>
      </div>

      <div className="card-footer">
        <button className="btn view-btn">View</button>
        <button className="btn add-btn">Remove</button>
      </div>
    </div>
  );
};

export default CartMedicineCard