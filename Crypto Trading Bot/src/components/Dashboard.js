import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Dashboard = () => {
  const [data, setData] = useState([]);
  var flag = 1;

  useEffect(() => {
    fetchData();
    setInterval(fetchData, 60000);
  }, []);

  async function fetchData() {
    const temp = [];
    const response = await fetch("https://api.wazirx.com/sapi/v1/tickers/24hr");
    const Datas = await response.json();
    Datas.map((item) => item.quoteAsset === "inr" && temp.push(item));
    setData(temp);

    if (flag === 1) {
      setTimeout(CreateToken, 5000);
    }
    setTimeout(UpdatePrice, 5000);

    function CreateToken() {
      flag = 0;
      const tempToken = [];
      for (let x of temp) {
        const temp = [];
        temp.push(x.baseAsset);
        tempToken.push(temp);
      }
      localStorage.setItem("cache_token", JSON.stringify(tempToken));
      localStorage.setItem("cache_coin", JSON.stringify(tempToken));
      localStorage.setItem("cache_base_coin", JSON.stringify(tempToken));
    }

    function UpdatePrice() {
      const cache_data = JSON.parse(localStorage.getItem("cache_token"));

      for (let x in temp) {
        if (temp[x].baseAsset === cache_data[x][0]) {
          cache_data[x].push(temp[x].lastPrice);
        } else {
          cache_data[x].push(temp[x].lastPrice);
        }
      }

      // Clear memory to prevent overflow
      if (cache_data[0].length > 5) {
        const temp_cache_data = JSON.parse(
          localStorage.getItem("cache_base_coin")
        );
        for (let x in temp_cache_data) {
          for (let y in cache_data[x]) {
            if (y != 0 && y < 5) {
              temp_cache_data[x].push(cache_data[x][y + 1]);
              console.log(cache_data[x][y + 1]);
            }
          }
        }
        localStorage.setItem("cache_token", JSON.stringify(temp_cache_data));
      } else {
        localStorage.setItem("cache_token", JSON.stringify(cache_data));
      }
    }
  }

  let last5min = "";
  let last15min = "";
  let last30min = "";
  let last1hr = "";

  const cache_data = JSON.parse(localStorage.getItem("cache_token"));
  const cache_dataSet = JSON.parse(localStorage.getItem("cache_coin"));

  for (let x in cache_dataSet) {
    const length = cache_data[x].length;
    const current = cache_data[x][length - 1];

    if (length > 5) {
      last5min = cache_data[x][length - 5];
      last5min = (
        ((parseFloat(current) - parseFloat(last5min)) / parseFloat(last5min)) *
        100
      ).toFixed(2);
    }
    if (length > 15) {
      last15min = cache_data[x][length - 15];
      last15min = (
        ((parseFloat(current) - parseFloat(last15min)) /
          parseFloat(last15min)) *
        100
      ).toFixed(2);
    }
    if (length > 30) {
      last30min = cache_data[x][length - 30];
      last30min = (
        ((parseFloat(current) - parseFloat(last30min)) /
          parseFloat(last30min)) *
        100
      ).toFixed(2);
    }
    if (length > 60) {
      last1hr = cache_data[x][length - 60];
      last1hr = (
        ((parseFloat(current) - parseFloat(last1hr)) / parseFloat(last1hr)) *
        100
      ).toFixed(2);
    }

    cache_dataSet[x][1] = last5min;
    cache_dataSet[x][2] = last15min;
    cache_dataSet[x][3] = last30min;
    cache_dataSet[x][4] = last1hr;
  }

  localStorage.setItem("cache_coin", JSON.stringify(cache_dataSet));

  return (
    <Container>
      <Table>
        <HeaderRow>
          <p>Token</p>
          <p>Price</p>
          <p>5 min</p>
          <p>15 min</p>
          <p>30 min</p>
          <p>1 hr</p>
        </HeaderRow>
        {data.map((items, index) => (
          <DataRow key={index}>
            <p>{items.baseAsset.toUpperCase()}</p>
            <p>
              ₹ {parseInt(items.lastPrice).toLocaleString("en-IN")}
              {(items.lastPrice - Math.floor(parseInt(items.lastPrice)))
                .toFixed(2)
                .toString() !== "0.00" &&
                "." +
                  (items.lastPrice - Math.floor(parseInt(items.lastPrice)))
                    .toFixed(2)
                    .toString()
                    .slice(-2)}
            </p>
            {cache_dataSet && (
              <p
                style={{
                  backgroundColor:
                    parseFloat(cache_dataSet[index][1]) > 0.9
                      ? "#00E676"
                      : parseFloat(cache_dataSet[index][1]) < -0.9
                      ? "#FF7043"
                      : "",
                }}
              >
                {cache_dataSet[index][1] &&
                  (cache_dataSet[index][1] > 0
                    ? "+" + cache_dataSet[index][1] + " %"
                    : cache_dataSet[index][1] + " %")}{" "}
              </p>
            )}
            {cache_dataSet && (
              <p
                style={{
                  backgroundColor:
                    parseFloat(cache_dataSet[index][2]) > 0.9
                      ? "#00E676"
                      : parseFloat(cache_dataSet[index][2]) < -0.9
                      ? "#FF7043"
                      : "",
                }}
              >
                {cache_dataSet[index][2] &&
                  (cache_dataSet[index][2] > 0
                    ? "+" + cache_dataSet[index][2] + " %"
                    : cache_dataSet[index][2] + " %")}{" "}
              </p>
            )}
            {cache_dataSet && (
              <p
                style={{
                  backgroundColor:
                    parseFloat(cache_dataSet[index][3]) > 2.0
                      ? "#00E676"
                      : parseFloat(cache_dataSet[index][3]) < -2.0
                      ? "#FF7043"
                      : "",
                }}
              >
                {cache_dataSet[index][3] &&
                  (cache_dataSet[index][3] > 0
                    ? "+" + cache_dataSet[index][3] + " %"
                    : cache_dataSet[index][3] + " %")}{" "}
              </p>
            )}
            {cache_dataSet && (
              <p
                style={{
                  backgroundColor:
                    parseFloat(cache_dataSet[index][4]) > 4.0
                      ? "#00E676"
                      : parseFloat(cache_dataSet[index][4]) < -4.0
                      ? "#FF7043"
                      : "",
                }}
              >
                {cache_dataSet[index][4] &&
                  (cache_dataSet[index][4] > 0
                    ? "+" + cache_dataSet[index][4] + " %"
                    : cache_dataSet[index][4] + " %")}{" "}
              </p>
            )}

            {/* Email Notifications */}

            {cache_dataSet &&
              parseFloat(cache_dataSet[index][4]) > 3.5 &&
              fetch(
                `https://saranshapi.herokuapp.com/sendemail/?to=saranshgupta987@gmail.com&subject=${cache_dataSet[
                  index
                ][0].toUpperCase()} Increased by ${
                  cache_dataSet[index][4]
                }%&message=The price of ${cache_dataSet[
                  index
                ][0].toUpperCase()} has changed by ${
                  cache_dataSet[index][4]
                }% since last 1 hour.&from=Crypto Boy`
              )}
            {cache_dataSet &&
              parseFloat(cache_dataSet[index][4]) > 3.5 &&
              fetch(
                `https://saranshapi.herokuapp.com/sendemail/?to=iamsamarthg@yahoo.com&subject=${cache_dataSet[
                  index
                ][0].toUpperCase()} Increased by ${
                  cache_dataSet[index][4]
                }%&message=The price of ${cache_dataSet[
                  index
                ][0].toUpperCase()} has changed by ${
                  cache_dataSet[index][4]
                }% since last 1 hour.&from=Crypto Boy`
              )}
            {cache_dataSet &&
              parseFloat(cache_dataSet[index][4]) < -3.5 &&
              fetch(
                `https://saranshapi.herokuapp.com/sendemail/?to=saranshgupta987@gmail.com&subject=${cache_dataSet[
                  index
                ][0].toUpperCase()} Decreased by ${
                  cache_dataSet[index][4]
                }%&message=The price of ${cache_dataSet[
                  index
                ][0].toUpperCase()} has changed by ${
                  cache_dataSet[index][4]
                }% since last 1 hour.&from=Crypto Boy`
              )}
            {cache_dataSet &&
              parseFloat(cache_dataSet[index][4]) < -3.5 &&
              fetch(
                `https://saranshapi.herokuapp.com/sendemail/?to=iamsamarthg@yahoo.com&subject=${cache_dataSet[
                  index
                ][0].toUpperCase()} Decreased by ${
                  cache_dataSet[index][4]
                }%&message=The price of ${cache_dataSet[
                  index
                ][0].toUpperCase()} has changed by ${
                  cache_dataSet[index][4]
                }% since last 1 hour.&from=Crypto Boy`
              )}
          </DataRow>
        ))}
      </Table>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  background-color: #a7ffeb;
  color: #004d40;
`;

const Row = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;

  > p {
    text-align: center;
    width: 16vw;
    border: 1px green solid;
    border-radius: 5px;
    margin: 0 5px;
    padding: 10px 0;
  }

  @media screen and (max-width: 600px) {
    > p:nth-child(2) {
      width: 25vw;
    }
  }
`;

const Table = styled.div``;

const HeaderRow = styled(Row)`
  background-color: #64ffda;
  border-bottom: #004d40 solid 2px;
  position: sticky;
  top: 0;

  > p {
    font-size: 1.25rem;
    font-weight: 600;

    :hover {
      background-color: #1de9b6;
    }
  }

  @media screen and (max-width: 600px) {
    > p {
      font-size: 1rem;
      padding-right: 3px;
      padding-left: 3px;
      margin-right: 2px;
      margin: 2px;
    }
  }
`;

const DataRow = styled(Row)`
  > p {
    border: 1px #1de9b6 solid;
    font-weight: 500;
  }

  @media screen and (max-width: 600px) {
    > p {
      font-size: 0.75rem;
      padding-right: 3px;
      padding-left: 3px;
      margin-right: 2px;
      margin: 2px;
    }
  }
`;
