import React from 'react';
import {Area, AreaChart, Brush, Tooltip, XAxis, YAxis} from "recharts";

function ButtonsForTimePeriods({loading, info}) {
    return (
        <div>
            {!loading && info && <AreaChart width={750} height={300} data={info}
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
        </div>
    );
}

export default ButtonsForTimePeriods;