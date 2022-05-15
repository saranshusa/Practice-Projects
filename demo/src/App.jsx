import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPhone, updateUserData } from "./redux/counterSlice";

function App() {
  const userData = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <p>Email: {userData.email}</p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>Phone: {userData.phone}</p>
      <button
        onClick={() =>
          dispatch(updateUserData({ email: email, phone: "9651128667" }))
        }
      >
        UPDATE
      </button>
    </div>
  );
}

export default App;
