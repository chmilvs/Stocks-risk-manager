import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts'

function BarDiagram({loading}) {

        loading.map(el => {
            el['Цена покупки'] = el['price'];
            el['Компания'] = el['companyName'];
            el['Текущая цена'] = el['actualPrice'];
        })

    console.log(loading)
    return (
        <>
            <BarChart
                width={600}
                height={300}
                data={loading}
                margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                }}
            >
                <XAxis dataKey='Компания' hide={true}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey='Цена покупки' fill="#8884d8"/>
                <Bar dataKey='Текущая цена' fill="#82ca9d"/>
            </BarChart>
        </>
    );
}

export default BarDiagram;

