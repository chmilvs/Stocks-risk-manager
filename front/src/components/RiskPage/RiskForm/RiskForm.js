import React, {useState,useEffect} from 'react';
import "./RiskForm.css";
import StockChartInfoFinal from "../../StockChartInfo/StockChartInfoFinal";
import SearchList from "../../searchList/searchList";

function RiskForm() {
  const [stockName, setStockName] = useState(null);
  const [failureMssg, setFailureMssg] = useState('')
  const [sumToSpend, setSumToSpend] = useState(0)

const handleSubmit = (e) =>{
    e.preventDefault()
  const {budget,riskPercent} = e.target
  let sum = parseInt(budget.value)/parseInt(riskPercent.value)
  setSumToSpend(sum)
}

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="riskform">
        <form autoComplete={"off"} onSubmit={handleSubmit}>
          <div className="col-6 col-12-xsmall" >
            <SearchList stockName={stockName} setStockName={setStockName} />
          </div>
          {failureMssg && <div>
            {failureMssg}}
          </div>}
          <div className="col-6 col-12-xsmall">
            <input
              type="number"
              name="budget"
              placeholder="Введите размер депозита"
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="number"
              name="riskPercent"
              placeholder="Введите риск на акцию в %"
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <div className="col-6 col-12-xsmall">
            <input type={'submit'} value={'Рассчитать количество акций к покупке'}/>
            </div>
          </div>
        </form>
      </div>
      <div>
        <StockChartInfoFinal tickerName={stockName} sumToSpend={sumToSpend} setFailureMssg={setFailureMssg} />
      </div>
    </div>
  );
}

export default RiskForm;
