import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { Dna } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="mx-auto text-center container w-96">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoute;
