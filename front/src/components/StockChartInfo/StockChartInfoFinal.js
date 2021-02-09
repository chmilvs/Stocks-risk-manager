import React, {useState, useEffect} from 'react';
import {Area, AreaChart, Brush, Tooltip, XAxis, YAxis} from 'recharts';

function StockChartInfoFinal({tickerName}) {
    const [info, setInfo] = useState(null)
    const [ticker, setTicker] = useState(tickerName)
    const [loading, setLoading] = useState(false)
    const [btnShow, setBtnShow] = useState(false)
    const [failureMssg, setFailureMssg] = useState('')

    useEffect(() => {
        if (tickerName !== null) {
            let URL = `https://financialmodelingprep.com/api/v3/historical-chart/15min/${tickerName.toUpperCase()}?apikey=3013358465f12be91f11f2c28a4cfd71`

            setLoading(true)
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    if (!data["Error Message"]) {
                        setFailureMssg('')
                        setInfo(data)
                        setBtnShow(true)
                        setLoading(false)
                    } else setFailureMssg('Тикер акции введен неправильно')
                })
        }

    }, [tickerName])


    const refreshData = (event) => {
        const {name} = event.target;
        let time = '';

        if (name === '1day') time = 'historical-price-full'
        else if (name === '4hour') time = 'historical-chart/4hour'
        else if (name === '15min') time = 'historical-chart/15min'
        let URL2 = `https://financialmodelingprep.com/api/v3/${time}/${tickerName.toUpperCase()}?apikey=3013358465f12be91f11f2c28a4cfd71`
        setLoading(true)
        fetch(URL2)
            .then(res => res.json())
            .then(data => {
                if (!data["Error Message"]) {
                    setFailureMssg('')
                    if (name === '1day') setInfo(data['historical'])
                    else setInfo(data)
                    setBtnShow(true)
                    setLoading(false)
                } else setFailureMssg('Тикер акции введен неправильно')
            })
        console.log(info)
    }

    return (
        <>
            <div style={{marginTop: "210px"}}>
                <div style={{marginLeft: "160px"}}>
                    {/*<form onSubmit={getInfo}>*/}
                    {/*    <button style={{marginBottom: "10px", height: "3em", fontSize: "15pt"}}*/}
                    {/*            className="button primary"*/}
                    {/*            type="submit">Поиск по тикеру*/}
                    {/*    </button>*/}
                    {/*    /!*<input name="inquiry" type="text" onChange={inputHandler} placeholder="Например: AAPL"></input>*!/*/}

                    {/*    {failureMssg}*/}

                    {/*</form>*/}
                    {btnShow && <div>
                        <button onClick={refreshData} type="button"
                                name="15min" className="button primary">15 мин
                        </button>

                        <button onClick={refreshData} type="button"
                                style={{margin: "10px"}} name="4hour"
                                className="button primary">4 часа
                        </button>

                        <button onClick={refreshData} type="button"
                                name="1day" className="button primary">1 день
                        </button>
                    </div>}
                </div>

                {!loading && info && <AreaChart width={710} height={370} data={info.reverse()}
                                                margin={{top: 20, right: 150, left: 100, bottom: 20}}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="2%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="70%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" hide={true}/>
                    <YAxis/>
                    <Brush dataKey="date" height={30} stroke="#8884d8"/>
                    <Area type="monotone" dataKey="close" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>

                    <Tooltip formatter={(label) => label + " USD"}/>
                </AreaChart>}
                <div style={{marginLeft: "160px"}}>
                    <ul className="alt">
                        Вывод:
                        <li>Текущая стоимость акции</li>
                        <li>Количество акций в лоте</li>
                        <li>Стоимость лота</li>
                        <li>Максимальный лот при заданном уровне риска</li>
                    </ul>

                    <button
                        style={{
                            marginTop: "10px",
                            marginBottom: "100px",
                            height: "3em",
                            fontSize: "15pt",
                        }}
                        className="button primary"
                    >
                        Добавить
                    </button>
                </div>
            </div>

        </>
    )
        ;
}

export default StockChartInfoFinal;
