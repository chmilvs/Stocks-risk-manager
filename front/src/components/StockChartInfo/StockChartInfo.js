import React, {useState} from 'react';
import {AreaChart, XAxis, YAxis, Brush, Tooltip, Area} from 'recharts';

function StockChartInfo(props) {
    const [info, setInfo] = useState(null)
    const [ticker, setTicker] = useState('')
    const [timePeriod, setTimePeriod] = useState('')
    const [loading, setLoading] = useState(false)

    let URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker.toUpperCase()}&apikey=VHOVYLDE88BS9RRT`
    const inputHandler = (event) => {
        setTicker(event.target.value.trim())
    }

    const getInfo = (event) => {
        event.preventDefault()
        console.log(URL)
        setLoading(true)
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setInfo(data)
                setLoading(false)
            })
    }

    const refreshData = (event) => {
        const {name} = event.target;
        console.log(name)

        let URL2 = `https://www.alphavantage.co/query?function=${name}&symbol=${ticker.toUpperCase()}&apikey=VHOVYLDE88BS9RRT`
        if (name === 'TIME_SERIES_MONTHLY_ADJUSTED') setTimePeriod('Monthly Adjusted Time Series')
        else if (name === 'TIME_SERIES_WEEKLY_ADJUSTED') setTimePeriod('Weekly Adjusted Time Series')
        else if (name === 'TIME_SERIES_DAILY_ADJUSTED') setTimePeriod('Time Series (Daily)')

        console.log(URL2)
        setLoading(true)
        fetch(URL2)
            .then(res => res.json())
            .then(data => {
                setInfo(data)
                setLoading(false)
            })
        console.log(info)
    }
    let data = [];
    let data2 = []

    if (info) {
        for (let key in info[timePeriod]) {
            data2.push(key)
        }
    }

    info && !loading && Object.values(info[timePeriod]).map((el, index) => {
        return data.push({"цена": Number(el["4. close"]), "дата": data2[index]})
    })
    console.log(data)
    console.log(data2)
    return (
        <>
            <div style={{marginTop: "210px"}}>
                <div style={{marginLeft: "160px"}}>
                    <form onSubmit={getInfo}>
                        <input type="text" onChange={inputHandler}></input>
                        <button style={{marginTop: "10px"}} className="button primary" type="submit">Поиск по тикеру
                        </button>
                    </form>
                    <div>
                        <button onClick={refreshData} type="button"
                                name="TIME_SERIES_DAILY_ADJUSTED" className="button primary">1 day
                        </button>

                        <button onClick={refreshData} type="button"
                                style={{margin: "10px"}} name="TIME_SERIES_WEEKLY_ADJUSTED"
                                className=" button primary">1 week
                        </button>

                        <button onClick={refreshData} type="button"
                                name="TIME_SERIES_MONTHLY_ADJUSTED" className="button primary">1 month
                        </button>
                    </div>
                </div>
                {data && <AreaChart width={710} height={310} data={data.reverse().slice(-100)}
                                    margin={{top: 20, right: 150, left: 100, bottom: 20}}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="2%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="70%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="дата" hide={true}/>
                    <YAxis/>
                    <Brush dataKey="дата" height={30} stroke="#8884d8"/>
                    <Area type="monotone" dataKey="цена" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>

                    <Tooltip/>
                </AreaChart>}
            </div>
        </>
    );
}

export default StockChartInfo;
