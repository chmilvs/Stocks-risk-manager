import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts'

function BarDiagram({loading}) {
    return (
        <>
            <BarChart
                width={500}
                height={300}
                data={loading}
                margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                }}
            >
                {/*<CartesianGrid strokeDasharray="3 3"/>*/}
                <XAxis dataKey="companyName" hide={true}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="price" fill="#8884d8"/>
                <Bar dataKey="actualPrice" fill="#82ca9d"/>
            </BarChart>
        </>
    );
}

export default BarDiagram;

