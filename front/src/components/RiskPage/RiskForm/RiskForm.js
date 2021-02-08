import React,{useState} from 'react';
import "./RiskForm.css";
import StockChartInfo from "../../StockChartInfo/StockChartInfo";
import companyNames from "./stockNames";
import SelectSearch from "react-select-search";
import {fuzzySearch} from "react-select-search";

function RiskForm() {
    console.log(companyNames)
    const[companyName,setCompanyName] = useState(null)
    console.log(companyName)
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="riskform">
                <form>
                    <div className="col-6 col-12-xsmall">
                        <input type="text" name="deposit" placeholder="Введите размер депозита"/>
                    </div>
                    <div className="col-6 col-12-xsmall">
                        <input type="text" name="riskpersent" placeholder="Введите риск на акцию в %"/>
                    </div>
                    <div className="col-6 col-12-xsmall" style={{color:'red'}}>
                         <SelectSearch  onChange={setCompanyName} options={companyNames} search filterOptions={fuzzySearch} name="tickerName"  placeholder="Choose your language"/>

                        {/*<input type="text" name="stockname" placeholder="Введите название акции"/>*/}
                    </div>
                    <div className="col-6 col-12-xsmall">
                        <input type="number" name="lotstobuy" id="email" placeholder="Введите лот"/>
                    </div>
                    <ul className="alt">
                        Вывод:
                        <li>Текущая стоимость акции</li>
                        <li>Количество акций в лоте</li>
                        <li>Стоимость лота</li>
                        <li>Максимальный лот при заданном уровне риска</li>
                    </ul>

                    <button style={{marginTop: "10px", marginBottom: "100px", height: "3em", fontSize: "15pt"}}
                            className="button primary">Добавить
                    </button>
                </form>
            </div>
            <div>
                <StockChartInfo tickerName={companyName}/>
            </div>
        </div>
    );
}

export default RiskForm;
