import React, { useContext, useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../Context/authContext';
import axios from 'axios';
import apiURL from '../../Constants/constant';
const Navbar = () => {
    const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);
    const [showMenu, setShowMenu] = useState (false)
    

    const handleLogOut = async() => {
        try {
            const res = await axios.post(`${apiURL}/auth/logout`, {}, {
                withCredentials : true
            })
    
            if (res.data.success) {
                localStorage.clear();   
                setIsAuthenticated(false);
                setUser(null);
                alert("User Logged Out Successfully");
            }
        } catch (error) {
            alert("Unable to logOut",error)
        }
    }

    // console.log("Is Authenticated",isAuthenticated);
    

    return (
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 2rem", background: "#216284" }}>
            <NavLink to="/">
                <div style={{ height: "3rem" }}>
                    <img src="Navabar_Logo.jpg" alt="" style={{ height: "100%", borderRadius: "50%", border: "2px solid white" }} />
                </div>
            </NavLink>
            <div>
                <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", gap: "2rem" }}>

                    <NavLink style={{ textDecoration: "none", color: "white", fontSize: "1rem" }} to="/">
                        <li style={{ border: "2px solid #123456", padding: "0.2rem 2rem", borderRadius: "1em 2rem 2rem 0", background: "#ff1234", }}>Home</li>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none", color: "white", fontSize: "1rem" }} to="about">
                        <li style={{ border: "2px solid #123456", padding: "0.2rem 2rem", borderRadius: "1em 2rem 2rem 0", background: "#ff1234", }}>About</li>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none", color: "white", fontSize: "1rem" }} to="/contact">
                        <li style={{ border: "2px solid #123456", padding: "0.2rem 2rem", borderRadius: "1em 2rem 2rem 0", background: "#ff1234", }}>Contact</li>
                    </NavLink>

                </ul>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: "3rem" }}>
                <div>
                    <NavLink to="/my-cart">
                    <BsCart2 style={{ fontSize: "2em", color: "#ffffff", fontWeight: "900", cursor : "pointer" }} />
                    </NavLink>
                </div>
                <div>
                    
                    {isAuthenticated ? (
                        <div style={{display:"flex", flexDirection :"column", gap : "10px", position: "relative" }}>
                        <img onClick={() => setShowMenu(!showMenu)} src="UserProfileIcon.png" alt="" height={50} />
                        <div style={{display : showMenu ? "flex" : "none", position : 'absolute', top : "4rem", right : "1rem", background : "#af8b8b", padding : "1rem 5px", borderRadius : "5px", flexDirection : "column", gap : "5px"}}>
                            <p 
                            style={{cursor : "pointer", }}
                            >
                                My-Account
                            </p>

                            <p 
                            style={{cursor : "pointer", }}
                            >
                                Your Payments
                            </p>

                            <p 
                            onClick={handleLogOut}
                            style={{cursor : "pointer", }}
                            >
                                Logout
                            </p>

                        </div>
                        </div>
                    )
                        : (
                            <NavLink to="/login">
                                <button style={{ padding: "0.5rem 2rem ", borderRadius: "1rem", background: "#a1a1a1" }}>Login</button>
                            </NavLink>
                        )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar