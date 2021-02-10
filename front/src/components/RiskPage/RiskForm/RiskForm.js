import React, {useState,useEffect} from 'react';
import "./RiskForm.css";
import SearchList from "../../searchList/searchList";
import {handleSubmitForCalculation} from '../../../fetchFunctions/fetchFunction'
import Cleave from 'cleave.js/react';

function RiskForm({setSumToSpend, stockName, setStockName, failureMssg}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginLeft:"50%" }}>
      <div className="riskform">
        <form autoComplete={"off"} onSubmit={(event) => handleSubmitForCalculation(event,setSumToSpend)}>
          <div className="col-6 col-12-xsmall" >
            <SearchList stockName={stockName} setStockName={setStockName} />
          </div>
          {failureMssg && <div>
            {failureMssg}}
          </div>}
          <div className="col-6 col-12-xsmall">
            <Cleave placeholder="Введите размер депозита в USD"
                    name="budget"
                    options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                    />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
                onInput = {(e) =>{
                  if (e.target.value < 101)
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)
                  else e.target.value = 100
                }}
              type="number"
              name="riskPercent"
              placeholder="Введите риск на акцию в %"
            />
          </div>
            <div>
            <button style={{
              marginTop: "10px",
              marginBottom: "100px",
              height: "3em",
              fontSize: "15pt",
            }} className="button primary">
              Рассчитать
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default RiskForm;
