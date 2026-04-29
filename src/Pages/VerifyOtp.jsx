import axios from 'axios'
import React from 'react'
import apiURL from '../Constants/constant'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VerifyOtp = () => {




  const [otp, setOtp] = useState("")
  const [resendOtp, setResendOtp] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(10);




  const handleSubmit = async (e) => {
    e.preventDefault();
    setVerifyOtp(true)
    if (!otp) {
      alert("enter valid Otp")
      setVerifyOtp(false);

    }
    try {
      const token = localStorage.getItem("accessToken")

      const res = await axios.post(`${apiURL}/auth/verify-otp`,
        {
          otp
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

      if (res.data.success) {
        alert("Otp Verified successfully");
        navigate("/")

      }
    } catch (error) {
      console.log(error)
    }
  }



  const handleResendOtp = async (e) => {
    e.preventDefault();
    setResendOtp(true);
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setSeconds(30)
          setResendOtp(false);
          return 0;
        }
        return prev - 1

      })
    }, 1000)
    const token = localStorage.getItem("accessToken")
    try {
      const res = await axios.post(`${apiURL}/auth/resend-otp`, {}, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }

      })

      if (res.data.success) {
        return alert("Otp sent successfully")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
     <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>

    
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          inputMode='numeric'
          value={otp}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value) && value.length <= 6) {
              setOtp(value);
            }
          }}
        />

        <button
          type="submit"
          disabled={verifyOtp}
        >
          {verifyOtp ? "Verifying" : "Submit"}
        </button>
      </form>

      <div>
        <p onClick={handleResendOtp}
          style={{
            cursor: resendOtp ? "not-allowed" : "pointer",
            opacity: resendOtp ? 0.5 : 1
          }}

        >
          {
            resendOtp ? `resend otp in ${seconds}` : "Resend Otp"
          }
        </p>


      </div>
      </div>
    </>
  )
}

export default VerifyOtp