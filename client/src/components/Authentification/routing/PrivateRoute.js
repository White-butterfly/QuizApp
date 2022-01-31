import { Navigate, Route, useNavigate } from "react-router-dom";


// const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

      const PrivateRoute = ({ component: Component, ...rest }) => {
        return (
          <Route
            {...rest}
            render={(props) =>
              localStorage.getItem("authToken") ? (
                <Component {...props} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        );
          };

export default PrivateRoute;