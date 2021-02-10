import React, {useEffect, useState} from 'react';
import {Area, AreaChart, Brush, Tooltip, XAxis, YAxis} from 'recharts';
import {fetchTickers, refreshActualPrice, refreshData} from '../../fetchFunctions/fetchFunction'

function StockChartInfoFinal({tickerName, setFailureMssg, sumToSpend}) {
    const [info, setInfo] = useState(null)
    const [loading, setLoading] = useState(false)
    const [btnShow, setBtnShow] = useState(false)
    const [actualPrice, setActualPrice] = useState(null)
    useEffect(() => {
        fetchTickers(tickerName, setLoading, setInfo, setBtnShow, setFailureMssg, setActualPrice)
        console.log('gerererer')
    }, [tickerName])
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div style={{marginTop: "210px"}}>
                <div style={{marginLeft: "160px"}}>
                    {tickerName && <div style={{display: "flex"}}>
                        <button onClick={(event) => {
                            refreshData(event, tickerName, setLoading, setFailureMssg, setInfo, setBtnShow)
                        }} type="button"
                                style={{
                                    marginRight: "5px",
                                    fontSize: "8pt",
                                    backgroundColor: "#8884d8",
                                    paddingLeft: "5px",
                                    paddingRight: "5px"
                                }} name="15min"
                                className="button primary smallButtons">15 мин
                        </button>
                        <button onClick={(event) => {
                            refreshData(event, tickerName, setLoading, setFailureMssg, setInfo, setBtnShow)
                        }} type="button"
                                style={{
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    fontSize: "8pt",
                                    backgroundColor: "#8884d8",
                                    paddingLeft: "5px",
                                    paddingRight: "5px"
                                }} name="4hour"
                                className="button primary smallButtons">4 часа
                        </button>
                        <button onClick={(event) => {
                            refreshData(event, tickerName, setLoading, setFailureMssg, setInfo, setBtnShow)
                        }} type="button"
                                style={{
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    fontSize: "8pt",
                                    backgroundColor: "#8884d8",
                                    paddingLeft: "5px",
                                    paddingRight: "5px"
                                }} name="1day"
                                className="button primary smallButtons">1 день
                        </button>
                        <button onClick={() => {
                            refreshActualPrice(tickerName, setFailureMssg, setActualPrice, setBtnShow, setLoading)
                        }} type="button"
                                style={{
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    fontSize: "8pt",
                                    backgroundColor: "#8884d8",
                                    paddingLeft: "5px",
                                    paddingRight: "5px"
                                }}
                                className="button primary smallButtons">Обновить текущую цену
                        </button>
                        <div style={{fontSize: "30px", fontWeight: "bold", marginLeft: "15px"}}>
                            {actualPrice} USD
                        </div>
                    </div>
                    }
                </div>
                {!loading && info && <AreaChart width={780} height={300} data={info.reverse()}
                                                margin={{top: 20, right: 150, left: 100, bottom: 20}}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="2%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="70%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" hide={true}/>
                    <YAxis type="number" domain={['auto', 'auto']} />
                    <Brush dataKey="date" height={30} stroke="#8884d8"/>
                    <Area type="monotone" dataKey="close" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
                    <Tooltip formatter={(label) => label + " USD"}/>
                </AreaChart>}
                {!loading && info && <div style={{marginLeft: "160px"}}>
                    {sumToSpend > 0 ? <ul className="alt">
                        Вывод:
                        <li>Текущая стоимость акции: {actualPrice} USD</li>
                        <li>Максимальный лот: {Math.floor(sumToSpend / actualPrice)} </li>
                    </ul> : null}
                    <form onSubmit={handleSubmit}>
                        <input name="inquiry" type="text" placeholder="Или введите свои данные"></input>
                        <button
                            style={{
                                marginTop: "0",
                                marginBottom: "100px",
                                height: "3em",
                                fontSize: "15pt",
                            }}
                            className="button primary">
                            Добавить
                        </button>
                    </form>
                </div>}
            </div>
        </>
    )
}

export default StockChartInfoFinal;
