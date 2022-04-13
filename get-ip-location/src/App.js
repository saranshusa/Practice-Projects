import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const getData = () => {
    fetch(
      "https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "aquamarine",
      }}
    >
      {data && (
        <div
          style={{
            border: "5px solid seagreen",
            borderRadius: "10px",
            padding: "25px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "monospace",
              fontSize: "1.5em",
              letterSpacing: "1.5px",
              lineHeight: "1.5",
            }}
          >
            City: {data.city}
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "monospace",
              fontSize: "1.5em",
              letterSpacing: "1.5px",
              lineHeight: "1.5",
            }}
          >
            State: {data.state}
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "monospace",
              fontSize: "1.5em",
              letterSpacing: "1.5px",
              lineHeight: "1.5",
            }}
          >
            Country: {data.country_name}
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "monospace",
              fontSize: "1.5em",
              letterSpacing: "1.5px",
              lineHeight: "1.5",
            }}
          >
            Latitude: {data.latitude}
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "monospace",
              fontSize: "1.5em",
              letterSpacing: "1.5px",
              lineHeight: "1.5",
            }}
          >
            Longitude: {data.longitude}
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "monospace",
              fontSize: "1.5em",
              letterSpacing: "1.5px",
              lineHeight: "1.5",
            }}
          >
            IP: {data.IPv4}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
