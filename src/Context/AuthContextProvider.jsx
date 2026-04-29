import React, { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import axios from "axios";
import apiURL from "../Constants/constant.js";

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async (token) => {
    return axios.get(`${apiURL}/auth/get-user`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  };

  useEffect(() => {
  const initAuth = async () => {
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
        localStorage.clear();
        setUser(null);
        setIsAuthenticated(false);
      }
    } finally {
      setLoading(false);
    }
  };

  initAuth();
}, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;