import {Cell, Pie, PieChart, Tooltip} from "recharts";

function PieDiagram({loading}) {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    let result = Object.values(loading.reduce((r, { amountBuyed, companyName }) => {
        r[companyName] = r[companyName] || { companyName, amountBuyed: 0 };
        r[companyName].amountBuyed += amountBuyed;
        return r;
    }, {}));

    return (
        <>
            <PieChart width={500} height={350}>
                <Pie
                    data={result}
                    cx={200}
                    cy={150}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="amountBuyed"
                    nameKey='companyName'
                >
                    {loading.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </>
    );
}

export default PieDiagram;
