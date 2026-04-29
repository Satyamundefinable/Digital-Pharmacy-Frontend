import axios from 'axios'
import React, { useState } from 'react'
import apiURL from '../Constants/constant'
import { useNavigate } from 'react-router-dom'

const PasswordResetPage = () => {

  const [email, setEmail] = useState("")
  const navigate = useNavigate();
  const [isClicked, setIsClicked] =useState(false)

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsClicked(true);
    try {
      const res = await axios.post(`${apiURL}/auth/reset-password`,
        {
          email,
        },
        {
  
        }
      )
      if (res.data.success) {
        const userId = res.data.userId;
        console.log(res.data)
        localStorage.setItem("userId", userId)
        alert("Password reset otp sent successfully")
        navigate("/verify-password-reset-otp")
      }
    } catch (error) {
      console.log("try again",error)
      
    }
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            name="email"
            onChange={(val) => setEmail(val.target.value)}
            placeholder='Enter email'
          />
          <button
          style={{
            cursor : isClicked ? "not-allowed" : "pointer",
            opacity : isClicked ? "0.5" : "1"
          }}
          disabled={isClicked} 
          type="submit">Send Otp</button>
        </form>
      </div>
    </>
  )
}

export default PasswordResetPage