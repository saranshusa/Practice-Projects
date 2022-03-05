import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  let Navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  function checkAuth() {
    const AuthToken = sessionStorage.getItem("TOKEN");
    if (AuthToken) {
      Navigate("/dashboard");
    } else {
      Navigate("/login");
    }
  }

  return <></>;
}

export default App;
