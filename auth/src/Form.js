import styled from "styled-components";


export const Form = styled.div`
  background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const P = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const Input = styled.input`
  margin-top: 1rem;
  font-weight: 600;
  height: 3rem;
  width: 15rem;
  border-radius: 5px;
  border: none;
  padding: 0 20px;
  outline: none;
`;

export const Button = styled.button`
  padding: 15px 25px;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  font-family: 'Montserrat', monospace;
  border-radius: 10px;
  border: none;
  background-color: #0b7dda;
  color: white;
  margin-top: 2rem;
  outline:none ;

  :focus {
    outline: none;
  }

  :active {
    background-color: #0a6fc2;
    transform: translateY(4px);
    box-shadow:
    0 0 5px 5px aquamarine,  /* inner white */
    0 0 5px 5px white, /* middle magenta */
    0 0 10px 10px #0ff;
  }

  :after {
    content: "";
    background-color: #f1f1f1;
    opacity: 0;
    transition: all 0.8s
  }

  :active:after {
    background-color: #f0f;
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
`;

export const Status = styled.p`
  background-color: #191919;
  font-family: monospace;
  width: 15rem;
  min-height: 2rem;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
