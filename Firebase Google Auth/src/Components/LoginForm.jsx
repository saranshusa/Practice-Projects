import styled from "styled-components";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import GoogleButton from "./GoogleButton";
import { useState } from "react";

function LoginForm() {
  const [user, setUser] = useState(null);

  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <Main>
      {user ? (
        <div className="details">
          <img src={user.photoURL} alt="avatar" />
          <p>Hi {user.displayName}!</p>
          <p>{user.email}</p>
          <p>{user.accessToken}</p>
          <p>{user.uid}</p>
        </div>
      ) : (
        <div onClick={() => SignInWithGoogle()}>
          <GoogleButton />
        </div>
      )}
    </Main>
  );
}

export default LoginForm;

const Main = styled.div`
  display: grid;
  place-items: center;
  padding-top: 5vh;

  .details {
    width: 500px;
    text-align: center;
  }

  p {
    width: 100%;
    word-wrap: break-word;
  }

  img {
    border-radius: 50%;
  }
`;
