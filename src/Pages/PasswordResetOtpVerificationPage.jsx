import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import apiURL from '../Constants/constant';
import { useNavigate } from 'react-router-dom';

const PasswordResetOtpVerificationPage = () => {
    const [otp, setOtp] = useState("")
    const [verifyOtp, setVerifyOtp] = useState(false);
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setVerifyOtp(true);
        const res = await axios.post(`${apiURL}/auth/verify-reset-password-otp`,
            {
                otp,
                userId
            },
            {
                withCredentials: true
            });

            if (res.data.success) {
                navigate("/create-new-password")
            }

    }
    return (
        <div style={{display: 'flex', justifyContent : 'center', alignItems : 'center'}}>
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
        </div>
    )
}

export default PasswordResetOtpVerificationPage