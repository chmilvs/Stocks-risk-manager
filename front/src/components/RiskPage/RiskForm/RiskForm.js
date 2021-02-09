import React, {useState} from 'react';
import "./RiskForm.css";
import StockChartInfoFinal from "../../StockChartInfo/StockChartInfoFinal";
import SearchList from "../../searchList/searchList";
import {getMaxLots} from "../../../fetchFunctions/fetchFunction";

function RiskForm() {
  const [stockName, setStockName] = useState(null);
  const [failureMssg, setFailureMssg] = useState('')
  const [deposit, setDeposit] = useState(null)
  const [riskLevel, setRiskLevel] = useState(null)
  const [finalResultOFCalculation, setFinalResultOFCalculation] = useState(0)

  const handleInput = (e) => {
    setDeposit(e.target.value)

  }
  const handleInput2 = (e) => {
    setRiskLevel(e.target.value)
    setFinalResultOFCalculation(getMaxLots(deposit, riskLevel, actualPrice))
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="riskform">
        <form>
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="budget"
              placeholder="Введите размер депозита"
              value={deposit}
              onChange={(e) => {handleInput(e)}}
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="riskpersent"
              placeholder="Введите риск на акцию в %"
              value={riskLevel}
              onChange={(e) => {handleInput2(e)}}
            />
          </div>
          <div className="col-6 col-12-xsmall" >
            <SearchList stockName={stockName} setStockName={setStockName} />
            {/*<input type="text" name="stockname" placeholder="Введите название акции"/>*/}
          </div>
          {failureMssg && <div>
            {failureMssg}}
          </div>}
          <div className="col-6 col-12-xsmall">
            <input
              type="number"
              name="lotstobuy"
              id="email"
              placeholder="Введите лот"
              value={1}
            />
          </div>
        </form>
      </div>
      <div>
        <StockChartInfoFinal tickerName={stockName} setFailureMssg={setFailureMssg} riskLevel={riskLevel} deposit={deposit}/>
      </div>
    </div>
  );
}

export default RiskForm;
