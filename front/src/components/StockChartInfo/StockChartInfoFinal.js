import React from 'react';
import {Area, AreaChart, Brush, Tooltip, XAxis, YAxis} from "recharts";

function StockChartInfoFinal({loading, info, setInfo}) {
    if(info) {
        info.map(el => {
            el['Цена'] = el['close'];
        })
    }
    return (
        <div>
            {!loading && info && <AreaChart width={780} height={300} data={info}
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
                <Area type="monotone" dataKey="Цена" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
                {info && info.length > 0  ? <Tooltip  formatter={(label) => label.toFixed(2) + " USD"}/> : null}
            </AreaChart>}
        </div>
    );
}

export default StockChartInfoFinal;
