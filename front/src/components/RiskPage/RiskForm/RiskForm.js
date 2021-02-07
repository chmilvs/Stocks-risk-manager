import React from 'react';
import "./RiskForm.css";
import { Link } from "react-router-dom";
import StockChartInfo from '../../stockChartInfo/StockChartInfo';

function RiskForm() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className="riskform">
        <form>
          <div className="col-6 col-12-xsmall">
            <input type="text" name="deposit" placeholder="Введите размер депозита" />
          </div>
          <div className="col-6 col-12-xsmall">
            <input type="text" name="riskpersent" placeholder="Введите риск на акцию в %" />
          </div>
          <div className="col-6 col-12-xsmall">
            <input type="text" name="stockname" placeholder="Введите название акции" />
          </div>


          <ul className="alt">
            Вывод:
                        <li>Текущая стоимость акции</li>
            <li>Количество акций в лоте</li>
            <li>Стоимость лота</li>
            <li>Максимальный лот при заданном уровне риска</li>
          </ul>

          <div className="col-6 col-12-xsmall">
            <input type="number" name="lotstobuy" id="email" placeholder="Введите лот" />
            <button className="button primary">Добавить</button>
          </div>
        </form>
      </div>
      <div >
        <StockChartInfo />
      </div>
    </div>
  );
}

export default RiskForm;
