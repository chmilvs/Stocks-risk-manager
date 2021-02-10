import React from 'react';
import "./RiskForm.css";
import SearchList from "../../searchList/searchList";
import {handleSubmitForCalculation} from '../../../fetchFunctions/fetchFunction'
import Cleave from 'cleave.js/react';
import { useSelector } from 'react-redux';

function RiskForm({setSumToSpend, stockName, setStockName, failureMssg}) {
  const deposit = useSelector(state => state.auth.currentUser.deposit)
  const depositChecker = (event) => {
    if(event.target.value.replace(/,/gi, '') <= deposit) {
      event.target.value = Math.max(0, parseInt(event.target.value.replace(/,/gi, '')) ).toString().slice(0,deposit.length)

    } else event.target.value = deposit
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", marginLeft:"50%" }}>
      <div className="riskform">
        <form autoComplete={"off"} onSubmit={(event) => handleSubmitForCalculation(event,setSumToSpend)}>
          <div className="col-6 col-12-xsmall" >
            <SearchList stockName={stockName} setStockName={setStockName} />
          </div>
          {failureMssg && <div>
            {failureMssg}
          </div>}
          <div className="col-6 col-12-xsmall">
            <Cleave onInput = {depositChecker}
                   value={deposit}
                   name='budget'
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
