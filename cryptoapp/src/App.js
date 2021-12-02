import { useState } from "react";
import styled from "styled-components";

function App() {
  const [symbol, setSymbol] = useState("");
  const [prices, setPrices] = useState(null);
  const CORS = "https://dry-crag-58790.herokuapp.com/";
  const API = "https://saranshapi.herokuapp.com/crypto/?";

  async function handleLogin(e) {
    e.preventDefault();
    const response = await fetch(`${CORS}${API}symbol=`);
    const data = await response.json();
    console.log(data);
    setPrices(data);
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <p>Welcome User</p>
        <input
          type="text"
          placeholder="Enter Cryptocurrency Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <input type="submit" value="GET" />
      </form>
      {prices != null &&
        prices.map(
          (coins) =>
            coins["pair"] === `${symbol}USD` && (
              <button>
                <p>{coins["pair"]}</p>
                <p>{coins["price"]}</p>
                <p>{coins["percentChange24h"]}</p>
              </button>
            )
        )}
    </div>
  );
}

export default App;
