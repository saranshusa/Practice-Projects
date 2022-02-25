import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    checkAuth();
  }, []);

  function checkAuth() {
    const AuthToken = sessionStorage.getItem("authToken");
    if (AuthToken) {
      setIsLoggedIn(true);
      // console.log("TRUE");
      setAuthToken(AuthToken);
    } else {
      setIsLoggedIn(false);
    }
    // console.log(authToken);
  }

  return (
    <>{isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}</>
  );
}

export default App;
