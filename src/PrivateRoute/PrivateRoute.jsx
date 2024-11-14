import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // If token exists, allow access to the protected route
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
