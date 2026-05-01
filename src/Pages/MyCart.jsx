import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartMedicineCard from './CartMedicineCard.jsx'
import apiURL from '../Constants/constant.js'

const MyCart = () => {
  const [cartMedicines, setCartMedicines] = useState([]);
  //  const data = localStorage.getItem("")
  // axios.get("http://localhost:5000/api/medicines/get-cart")


  
    useEffect(() => {
      const fetchData = async () => {
        axios.get(`${apiURL}/medicines/get-cart`,{
        withCredentials : true
      })
        .then((res) => {
          if(res.data.success) {
            // console.log("res.data",res.data)
            // console.log(res.data.message)
            // console.log(" cart.map",res.data.cart);
  
            setCartMedicines(res.data.cart)
          }
        }).catch((err) => {
          console.log("not able to fetch cart data",err)
        })
      } 

      fetchData()
    }, [setCartMedicines])
    // console.log("cartMedicines", cartMedicines);
    
  return (
    <div>
      {
        Array.isArray(cartMedicines) && cartMedicines.length > 0 ? (
          cartMedicines.map((items) => (
           <CartMedicineCard key={items.medicine._id} medicine={items.medicine} quantity={items.quantity}/>
          ))
        ) : (
          <p>
            No items
          </p>
        )
        
      }
    </div>
  )
}

export default MyCart