import React from "react";
import { useState } from "react";

import Dashboard from "./Dashboard";
import Homepage from "../components/Homepage";

const Home = () => {
  const [auth, setAuth] = useState(false);

  return (
    <>
      {auth ? <Dashboard isLoggedIn={auth} /> : <Homepage isLoggedIn={auth} />}
    </>
  );
};

export default Home;
