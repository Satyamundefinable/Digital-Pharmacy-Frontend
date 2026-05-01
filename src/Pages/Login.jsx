import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css"
import { AuthContext } from "../Context/authContext.js";
import apiURL from "../Constants/constant.js";



const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState("login");
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const [userId, setUserId] = useState(null)
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { setIsAuthenticated, setUser } = useContext(AuthContext);



    // 🚀 Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSubmitted(true);

        if (state === "login") {
            try {
                // console.log("URL", apiURL)
                // console.log(import.meta.env);

                await axios.post(
                    `${apiURL}/auth/login`
                    , {
                        email,
                        password
                    },
                    {
                        withCredentials: true
                    })
                    .then(async (res) => {
                        console.log(apiURL);
                        
                        if (res.data.success) {
                            // console.log("Backend data : ", res.data.isAuthenticated);
                            const { accessToken } = res.data;
                            // console.log("accessToken", res.data.accessToken)
                            if (accessToken) {
                                localStorage.setItem("accessToken", accessToken)
                                setIsAuthenticated(true)
                                navigate("/")

                            } else {
                                console.log("token not recieved")
                            }


                            // console.log("setIsAuthenticated",setIsAuthenticated);
                            const userRes = await axios.get(
                                `${apiURL}/auth/get-user`,
                                {
                                    headers: {
                                        Authorization: `Bearer ${accessToken}`,
                                    },
                                    withCredentials: true,
                                }
                            );

                            setUser(userRes.data.user);
                            setSuccess("User Loggen in sucessfully");
                            navigate("/");
                        }
                        else {
                            setError("An error occured while logging in")
                            setIsAuthenticated(false)
                            setEmail("")
                            setPassword("")
                            setIsSubmitted(false);
                        }

                    })
                    .catch((err) => {
                        setError("An error occured, try again", err)
                        alert("An error occured, try again", err)
                        console.log(err)
                        setEmail("")
                        setPassword("")

                    });

            } catch (error) {
                setError("error while submitting data", error)
                setEmail("")
                setPassword("")
            }

        } else {
            try {
                const res = await axios.post(
                    `${apiURL}/auth/register`,
                    {
                        name,
                        email,
                        password
                    },
                    {
                        withCredentials: true
                    }
                );

                if (res.data.success) {
                    // const accessToken = res.data.accessToken
                    const accessToken  = res.data.accessToken;

                    localStorage.setItem("accessToken", accessToken)
                    setSuccess(true);
                    setIsAuthenticated(true)
                    navigate("/verify-otp");
                } else {
                    alert(res.data.message || "Registration failed");
                }

            } catch (error) {
                console.log(error);

                alert(error.response?.data?.message || "Something went wrong");

                setError(error.response?.data?.message || "Error while submitting data");
            }
        }



        

    };

    return (
        <div className="container" >
            {
                state === "login" ? (
                    <div style={{ border: "2px solid #000", padding: "2rem", borderRadius: "1rem" }}>
                        <form className="form" onSubmit={handleSubmit} >
                            <h2>Login</h2>

                            {error && <p className="error" >{error}</p>}
                            {success && <p className="success" >{success}</p>}

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <button
                                style={{
                                    opacity: isSubmitted ? "0.5" : "1",
                                    cursor: isSubmitted ? "not-allowed" : "pointer"
                                }}
                                className="button" type="submit" disabled={isSubmitted} >
                                Login
                            </button>
                        </form>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ cursor: "pointer" }} onClick={() => setState("signup")}>
                                register
                                <span >

                                </span>
                            </p>
                            <p onClick={() => {
                                navigate("/reset-password")
                            }}>
                                forget password?
                            </p>
                        </div>

                    </div>
                )
                    :
                    (
                        <div>
                            <form className="form" onSubmit={handleSubmit} >
                                <h2>Sign Up</h2>

                                {error && <p className="error" >{error}</p>}
                                {success && <p className="success" >{success}</p>}

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />


                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />

                                <button
                                    style={{
                                        opacity: isSubmitted ? "0.5" : "1",
                                        cursor: isSubmitted ? "not-allowed" : "pointer"
                                    }}
                                    className="button" type="submit" disabled={isSubmitted} >
                                    Sign Up
                                </button>
                            </form>

                            <div>

                                <p onClick={() => setState("login")}>
                                    login
                                </p>
                            </div>
                        </div>
                    )
            }


        </div>
    );
};



export default Login;