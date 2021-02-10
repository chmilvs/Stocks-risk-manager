import './Table.css';
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { API_KEY, GET_COMPANY_NAMES } from '../../../redux/utils/utils';
function Table() {
  const stocks = useSelector(state => state.auth.currentUser.stocks)
  const [loading, setLoading] = useState([])
  const expired = 'Apikey expired'
  useEffect(() => {
    const textArr = stocks
      .map((el) => {
        return el.tickerName;
      })
      .join();
      if(stocks.length>0){
    fetch(`${GET_COMPANY_NAMES}${textArr}${API_KEY}`)
      .then((res) => res.json())
      .then((stockss) => {
        if(stockss.status === 200) {
        stockss.map((el, i) => {
          stocks[i].companyName = el.name;
          stocks[i].actualPrice = el.price;
        })
      } else {
          stocks.forEach(el => {
              el.companyName = expired
              el.actualPrice = expired
          })
        } 
        setLoading(stocks);
      });
  }}, []);

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                <tr>
                    <th>Название компании</th>
                    <th>Тикер</th>
                    <th>Лот</th>
                    <th>Цена сейчас, $</th>
                    <th>Стоимость сейчас, $</th>
                    <th>Цена покупки, $</th>
                    <th>Стоимость покупки, $</th>
                    <th>Прибыль, %</th>
                </tr>
                </thead>
                <tbody>
                {loading && loading.map(stock => 
                <tr key={stock.tickerName}>
                    <td>{stock.companyName}</td>
                    <td>{stock.tickerName}</td>
                    <td>{stock.amountBuyed}</td>
                    <td>{stock.actualPrice>0?stock.actualPrice:expired}</td>
                    <td>{stock.actualPrice>0?(stock.amountBuyed * stock.actualPrice).toFixed(2):expired}</td>
                    <td>{stock.price}</td>
                    <td>{stock.actualPrice>0?(stock.amountBuyed * stock.price).toFixed(2):expired}</td>
                    <td>{stock.actualPrice>0?Math.floor(((stock.actualPrice - stock.price) / stock.price) * 100):expired}</td>
                </tr>
                            )}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="7"></td>
                    <td>100.00</td>
                </tr>
                </tfoot>
            </table>

        </div>
    );
}

export default Table;
