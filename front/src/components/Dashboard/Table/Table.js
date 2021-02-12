import './Table.css';
function Table({loading, expired}) {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                <tr>
                    <th>Название компании</th>
                    <th>Тикер</th>
                    <th>Кол-во акций</th>
                    <th>Цена сейчас, $</th>
                    <th>Стоимость сейчас, $</th>
                    <th>Цена покупки, $</th>
                    <th>Стоимость покупки, $</th>
                    <th>Прибыль, %</th>
                </tr>
                </thead>
                <tbody>
                {loading && loading.map(stock => 
                <tr key={Math.random()}>
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
