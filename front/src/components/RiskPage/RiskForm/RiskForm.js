import React, {useState,useEffect} from 'react';
import "./RiskForm.css";
import SearchList from "../../searchList/searchList";
import {handleSubmitForCalculation} from '../../../fetchFunctions/fetchFunction'

function RiskForm({setSumToSpend, stockName, setStockName, failureMssg}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="riskform">
        <form autoComplete={"off"} onSubmit={(event) => handleSubmitForCalculation(event, setSumToSpend)}>
          <div className="col-6 col-12-xsmall" >
            <SearchList stockName={stockName} setStockName={setStockName} />
          </div>
          {failureMssg && <div>
            {failureMssg}
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

            <button style={{
              marginTop: "10px",
              marginBottom: "100px",
              height: "3em",
              fontSize: "15pt",
            }} className="button primary">
              Рассчитать
            </button>
        </form>
      </div>
    </div>
  );
}

export default RiskForm;
