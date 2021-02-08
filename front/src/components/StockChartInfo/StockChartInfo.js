import React, { useState } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Brush, Legend, ReferenceLine, Tooltip, Area } from 'recharts';

function StockChartInfo(props) {
  const [info, setInfo] = useState(null)
  const [ticker, setTicker] = useState('')

  const inputHandler = (event) => {
    setTicker(event.target.value.trim())
  }
  const getInfo = (event) => {
    event.preventDefault()

    const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker.toUpperCase()}&outputsize=comapct&apikey=VHOVYLDE88BS9RRT`

    fetch(URL)
      .then(res => res.json())
      .then(data => { setInfo(data) })

  }
  let data = [];
  let data2 = []

  if (info) {
    for (let key in info["Time Series (Daily)"]) {
      data2.push(key)
    }
  }

  info && Object.values(info["Time Series (Daily)"]).map((el, index) => {
    return data.push({ "цена": Number(el["4. close"]), "дата": data2[index] })
  })

  return (
    <>
      <div style={{ marginTop: "210px" }}>
        <div style={{ marginLeft: "160px" }}>
          <form onSubmit={getInfo}>
            <input type="text" onChange={inputHandler}></input>
            <button className="button primary" type="submit">Поиск по тикеру</button>
          </form>

        </div>
        {data && <AreaChart width={710} height={380} data={data.reverse().slice(50, 100)}
          margin={{ top: 20, right: 150, left: 100, bottom: 20 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="2%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="70%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="дата" hide={ true }/>
          <YAxis /> 
          <Brush dataKey="дата" height={30} stroke="#8884d8"/>
          <Area type="monotone" dataKey="цена" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Tooltip />
        </AreaChart>}
      </div>
    </>
  );
}

export default StockChartInfo;
