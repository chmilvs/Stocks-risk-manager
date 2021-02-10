import React, {useState,useEffect} from 'react';
import "./RiskForm.css";
import SearchList from "../../searchList/searchList";
import {handleSubmitForCalculation} from '../../../fetchFunctions/fetchFunction'

function RiskForm({setSumToSpend, stockName, setStockName, failureMssg}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="riskform">
        <form autoComplete={"off"} onSubmit={(event) => handleSubmitForCalculation(event,setSumToSpend)}>
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
    </div>
  );
}

export default RiskForm;
