import React from "react";
import { useState } from "react";

import SendOTP from "../components/SendOTP";
import VerifyOTP from "../components/VerifyOTP";

const Reset = () => {
  const [steps, setSteps] = useState(1);
  const [email, setEmail] = useState("");

  const UpdateSteps = (step, email) => {
    setSteps(step);
    setEmail(email);
  };

  console.log(steps);
  return (
    <div>
      {steps === 1 && <SendOTP currentStep={UpdateSteps} />}
      {steps === 2 && <VerifyOTP currentStep={UpdateSteps} email={email} />}
    </div>
  );
};

export default Reset;
