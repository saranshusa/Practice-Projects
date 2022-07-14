import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  function SEND() {
    if (!number.length) return;
    if (number.length !== 10) {
      alert("Enter 10 digit number!");
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    axios
      .post(
        "https://graph.facebook.com/v13.0/100948095969342/messages",
        {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: `91${number}`,
          type: "template",
          template: {
            name: "secret_verification_code",
            language: { code: "en" },
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", text: name },
                  { type: "text", text: otp },
                ],
              },
            ],
          },
        },
        {
          headers: {
            Authorization:
              "Bearer EAAEfVhvMIbUBAFUodV0in1w7m1lxUZCtS2PanuGL2ZC4ri2YtsKHYiSIuleXl3Usm9jZAYB0E9TxM78sAlqe8LmcLcmfnEueFmc3jY4HEBXJKV6a42VUaSEMGxz2ZCzDnHZB4wVr8hZBUtddYZC4IUEZCSuZCcwi6lJflRoZCxz5ZCg2Ct51G1f5UfOmGKRQmBQNe31V5pH9yOlswZDZD",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        alert("Sent");
      });
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Contact Name"
      />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="WhatsApp Number"
      />
      <button onClick={SEND}>Send WhatsApp</button>
    </div>
  );
}

export default App;
