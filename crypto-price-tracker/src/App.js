import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [changeData, setChangeData] = useState();
  const [currentPrice, setCurrentPrice] = useState();

  useEffect(() => {
    localStorage.clear();
    init();
    setInterval(Save, 60000);
  }, []);

  const API = "https://api.wazirx.com/sapi/v1/tickers/24hr";

  const init = async () => {
    const Res = await fetch(API);
    const ArrayJSON = await Res.json();
    const Array = [];
    ArrayJSON.map((item) => item.quoteAsset === "inr" && Array.push(item));

    setCurrentPrice(Array);

    var baseToken = [];
    for (let x of Array) {
      let y = [];
      y.push(x.baseAsset);
      y.push("");
      y.push("");
      y.push("");
      y.push("");
      baseToken.push(y);
    }
    localStorage.setItem("BASE_TOKEN", JSON.stringify(baseToken));

    var token = [];
    for (let x of Array) {
      let y = [];
      y.push(x.baseAsset);
      y.push(x.lastPrice);
      token.push(y);
    }
    localStorage.setItem("TOKEN", JSON.stringify(token));
  };

  const Save = async () => {
    var temp = localStorage.getItem("TOKEN");
    var priceList = JSON.parse(temp);

    const Res = await fetch(API);
    const ArrayJSON = await Res.json();
    const Array = [];
    ArrayJSON.map((item) => item.quoteAsset === "inr" && Array.push(item));

    setCurrentPrice(Array);

    for (let x in priceList) {
      priceList[x].push(Array[x].lastPrice);
    }
    localStorage.setItem("TOKEN", JSON.stringify(priceList));

    var EmailData = [];
    var emailFlag = false;

    const length = priceList[0].length;
    if (length > 5) {
      var changeList = localStorage.getItem("BASE_TOKEN");
      changeList = JSON.parse(changeList);

      for (let x in priceList) {
        var last5 = priceList[x][length - 5];
        var current = priceList[x][length - 1];
        last5 = (
          ((parseFloat(current) - parseFloat(last5)) / parseFloat(last5)) *
          100
        ).toFixed(2);
        changeList[x][1] = last5;

        if (length > 15) {
          var last15 = priceList[x][length - 15];
          last15 = (
            ((parseFloat(current) - parseFloat(last15)) / parseFloat(last15)) *
            100
          ).toFixed(2);
          changeList[x][2] = last15;
        }

        if (length > 30) {
          var last30 = priceList[x][length - 30];
          last30 = (
            ((parseFloat(current) - parseFloat(last30)) / parseFloat(last30)) *
            100
          ).toFixed(2);
          changeList[x][3] = last30;
        }

        if (length > 60) {
          var last60 = priceList[x][length - 60];
          last60 = (
            ((parseFloat(current) - parseFloat(last60)) / parseFloat(last60)) *
            100
          ).toFixed(2);
          changeList[x][4] = last60;
        }

        // Email Notifications
        if (length > 60) {
          if (parseFloat(changeList[x][4]) > 3.0) {
            var pair = `${changeList[x][0].toUpperCase()} : ${
              changeList[x][4]
            }%           `;
            EmailData.push(pair);
            emailFlag = true;
          }
          if (parseFloat(changeList[x][4]) < -3.0) {
            var pair = `${changeList[x][0].toUpperCase()} : ${
              changeList[x][4]
            }%           `;
            EmailData.push(pair);
            emailFlag = true;
          }
        }
      }

      if (emailFlag) {
        fetch(
          `https://dry-crag-58790.herokuapp.com/https://saranshapi.herokuapp.com/sendemail/?to=saranshgupta987@gmail.com&subject=Cryptocurrency Price Alert&message=${EmailData}&from=Crypto Boy 2.0`
        );
      }

      localStorage.setItem("BASE_TOKEN", JSON.stringify(changeList));
      setChangeData(changeList);
    }
  };

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
        {currentPrice &&
          currentPrice.map((items, index) => (
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
              {changeData && (
                <p
                  style={{
                    backgroundColor:
                      parseFloat(changeData[index][1]) > 0.9
                        ? "#00E676"
                        : parseFloat(changeData[index][1]) < -0.9
                        ? "#FF7043"
                        : "",
                  }}
                >
                  {changeData[index][1] &&
                    (changeData[index][1] > 0
                      ? "+" + changeData[index][1] + " %"
                      : changeData[index][1] + " %")}{" "}
                </p>
              )}
              {changeData && (
                <p
                  style={{
                    backgroundColor:
                      parseFloat(changeData[index][2]) > 0.9
                        ? "#00E676"
                        : parseFloat(changeData[index][2]) < -0.9
                        ? "#FF7043"
                        : "",
                  }}
                >
                  {changeData[index][2] &&
                    (changeData[index][2] > 0
                      ? "+" + changeData[index][2] + " %"
                      : changeData[index][2] + " %")}{" "}
                </p>
              )}
              {changeData && (
                <p
                  style={{
                    backgroundColor:
                      parseFloat(changeData[index][3]) > 2.0
                        ? "#00E676"
                        : parseFloat(changeData[index][3]) < -2.0
                        ? "#FF7043"
                        : "",
                  }}
                >
                  {changeData[index][3] &&
                    (changeData[index][3] > 0
                      ? "+" + changeData[index][3] + " %"
                      : changeData[index][3] + " %")}{" "}
                </p>
              )}
              {changeData && (
                <p
                  style={{
                    backgroundColor:
                      parseFloat(changeData[index][4]) > 4.0
                        ? "#00E676"
                        : parseFloat(changeData[index][4]) < -4.0
                        ? "#FF7043"
                        : "",
                  }}
                >
                  {changeData[index][4] &&
                    (changeData[index][4] > 0
                      ? "+" + changeData[index][4] + " %"
                      : changeData[index][4] + " %")}{" "}
                </p>
              )}
            </DataRow>
          ))}
      </Table>
    </Container>
  );
}

export default App;

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
