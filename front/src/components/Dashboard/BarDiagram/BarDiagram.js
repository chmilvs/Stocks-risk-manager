import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts'

function BarDiagram({loading}) {

    loading.map(el => {
        if ('price' !== 'Цена покупки') {
            Object.defineProperty(el, 'Цена покупки',
                Object.getOwnPropertyDescriptor(el, 'price'));
            delete el['price'];
        }
        if ('companyName' !== 'Компания') {
            Object.defineProperty(el, 'Компания',
                Object.getOwnPropertyDescriptor(el, 'companyName'));
            delete el['companyName'];
        }
        if ('actualPrice' !== 'Текущая цена') {
            Object.defineProperty(el, 'Текущая цена',
                Object.getOwnPropertyDescriptor(el, 'actualPrice'));
            delete el['actualPrice'];
        }
    })


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
                <XAxis dataKey="Компания" hide={true}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="Цена покупки" fill="#8884d8"/>
                <Bar dataKey="Текущая цена" fill="#82ca9d"/>
            </BarChart>
        </>
    );
}

export default BarDiagram;

