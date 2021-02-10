import './Table.css';
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
function Table() {
  const stocks = useSelector(state => state.auth.currentUser.stocks)
  console.log(stocks);
  useEffect(() => {
    fetch('https://financialmodelingprep.com/api/v3/quote/')
    .then(res => res.json())
    .then(stocks)
  })
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
                {stocks && stocks.map(stock => 
                <tr>
                    <td>Ante turpis integer</td>
                    <td>{stock.tickerName}</td>
                    <td>{stock.amountBuyed}</td>
                    <td>29.99</td>
                    <td>29.99</td>
                    <td>{stock.price}</td>
                    <td>{stock.amountBuyed * stock.price}</td>
                    <td>+/-</td>
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
