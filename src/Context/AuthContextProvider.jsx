import React, { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import axios from "axios";
import apiURL from "../Constants/constant.js";

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [medicines, setMedicines] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async (token) => {
    return await axios.get(`${apiURL}/auth/get-user`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  };

  useEffect(() => {
  const checkUser = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetchUser(token);
      setUser(res.data.user);
      setIsAuthenticated(true);

    } catch (err) {
      console.log("Not able to refresh token", err);
      
      try {
        const refreshRes = await axios.get(
          `${apiURL}/auth/refreshAccessToken`,
          { withCredentials: true }
        );

        const newToken = refreshRes.data.accessToken;
        localStorage.setItem("accessToken", newToken);

        const retry = await fetchUser(newToken);
        setUser(retry.data.user);
        setIsAuthenticated(true);

      } catch (error) {
        console.log("Access Token Error", error)
        localStorage.removeItem("accessToken");
        setUser(null);
        setIsAuthenticated(false);
      }
    } finally {
      setLoading(false);
    }
  };

  checkUser();
}, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        loading,
        medicines,
        setMedicines
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;