import React, { useState } from "react";
import styled from "styled-components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Admin Email"
        />
        <input
          type="password"
          value={[password]}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin Password"
        />
      </form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
