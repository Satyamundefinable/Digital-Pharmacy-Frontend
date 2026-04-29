import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import apiURL from '../Constants/constant.js';
import { useNavigate } from 'react-router-dom';

const CreateNewPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        setIsClicked(true);
        if (newPassword === confirmNewPassword) {
        const res = await axios.post(`${apiURL}/auth/create-new-password`, {
            newPassword,
            userId
        }, {
            withCredentials : true  
        })

        if (res.data.success) {
            alert("New password created successfully");
            localStorage.removeItem("userId");
            navigate("/login")

        }
    }
}
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    value={newPassword}
                    onChange={(e) =>
                        setNewPassword(e.target.value)
                    }
                    placeholder="Enter new password"
                />
                <input
                    type="text"
                    value={confirmNewPassword}
                    onChange={(e) =>
                        setConfirmNewPassword(e.target.value)
                    }
                    placeholder="Confirm new password"
                />

                <button
                    disabled={isClicked}
                    style={{
                        cursor: isClicked ? "not-allowed" : "pointer",
                        opacity: isClicked ? "0.5" : "1"
                    }}
                    type="submit">
                    {isClicked ? "Submitted" : "Create new password"}
                </button>

            </form>
        </div>
    )
}

export default CreateNewPassword