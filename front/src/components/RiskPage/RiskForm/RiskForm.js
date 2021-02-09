import React, {useState} from 'react';
import "./RiskForm.css";
import StockChartInfoFinal from "../../StockChartInfo/StockChartInfoFinal";
import SearchList from "../../searchList/searchList";

function RiskForm() {
  const [stockName, setStockName] = useState(null);
  console.log(stockName)
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="riskform">
        <form>
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="deposit"
              placeholder="Введите размер депозита"
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="riskpersent"
              placeholder="Введите риск на акцию в %"
            />
          </div>
          <div className="col-6 col-12-xsmall" >
            <SearchList stockName={stockName} setStockName={setStockName} />
            {/*<input type="text" name="stockname" placeholder="Введите название акции"/>*/}
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="number"
              name="lotstobuy"
              id="email"
              placeholder="Введите лот"
            />
          </div>
        </form>
      </div>
      <div>
        <StockChartInfoFinal tickerName={stockName} />
      </div>
    </div>
  );
}

export default RiskForm;
