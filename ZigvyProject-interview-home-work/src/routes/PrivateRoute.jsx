// import React, { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import Loader from "../components/Loader/Loader";

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated, isLoading } = useSelector((state) => state.user);

//   if (!isLoading) {
//     return (
//       <>
//         {isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />}
//       </>
//     );
//   } else {
//     if (isAuthenticated) {
//       return <>{children}</>;
//     } else {
//       return <Loader />;
//     }
//   }
// };

// export default PrivateRoute;
