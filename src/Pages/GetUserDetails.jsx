import React, { useContext } from "react";
import { AuthContext } from "../Context/authContext.js";

const GetUserDetails = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>User Details</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default GetUserDetails;