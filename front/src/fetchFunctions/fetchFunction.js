import {API_KEY, GET_ALL_STOCKS} from "../redux/utils/utils";

export const fetchTickers = (tickerName, setLoading, setInfo, setBtnShow, setFailureMssg, setActualPrice) => {
    if (tickerName !== null) {
        tickerName.split('.').join('%2E')
        console.log('here1')
        let URL = `https://financialmodelingprep.com/api/v3/historical-chart/15min/${tickerName}`
        setLoading(true)
        fetch(`${URL}${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (!data["Error Message"]) {
                    setFailureMssg('')
                    setInfo(data.reverse())
                    setBtnShow(true)
                    setLoading(false)
                } else setFailureMssg('Тикер акции введен неправильно')
            })

        setLoading(true)
        tickerName.split('.').join('%2E')
        let urlForActualPrice = `https://financialmodelingprep.com/api/v3/quote-short/${tickerName}`
        console.log(urlForActualPrice)
        fetch(`${urlForActualPrice}${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (!data["Error Message"]) {
                    setFailureMssg('')
                    console.log(data[0]['price'])
                    if (data[0]['price']) setActualPrice(data[0]['price'].toFixed(2))
                    else setActualPrice('No Data Available')

                    setBtnShow(true)
                    setLoading(false)
                } else setFailureMssg('Тикер акции введен неправильно')
            })
    }
}

export const refreshActualPrice = (tickerName, setFailureMssg, setActualPrice, setBtnShow, setLoading) => {
    console.log('here3')
    tickerName.split('.').join('%2E')
    let urlForActualPrice2 = `https://financialmodelingprep.com/api/v3/quote-short/${tickerName}`
    fetch(`${urlForActualPrice2}${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            if (!data["Error Message"]) {
                setFailureMssg('')
                setActualPrice(data[0]['price'].toFixed(2))
                setBtnShow(true)
                setLoading(false)
            } else setFailureMssg('Тикер акции введен неправильно')
        })
}

export const refreshData = (event, tickerName, setLoading, setFailureMssg, setInfo,  setBtnShow) => {
    console.log('here4')

    const {name} = event.target;
    let time = '';
    tickerName.split('.').join('%2E')
    if (name === '1day') time = 'historical-price-full'
    else if (name === '4hour') time = 'historical-chart/4hour'
    else if (name === '15min') time = 'historical-chart/15min'
    let URL2 = `https://financialmodelingprep.com/api/v3/${time}/${tickerName}`
    setLoading(true)
    fetch(`${URL2}${API_KEY}`)
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
}

export const getStocks = async () =>{
    const res = await fetch(`${GET_ALL_STOCKS}${API_KEY}`)
    const jsonedRes = await res.json()
    console.log(jsonedRes['Error Message'])
    if(!jsonedRes['Error Message']) {
        const stocksArray = await jsonedRes.map(el => {
            return {name: `${el.name} ${el.symbol}`, value: el.symbol}
        })
        return stocksArray
    }
}

// export const handleSubmit = (event) => {
//     event.preventDefault()
// }

export const handleSubmitForCalculation = (event, setSumToSpend) =>{
    event.preventDefault()
    const {budget,riskPercent} = event.target
    let sum = parseInt(budget.value.replace(/,/gi, ''))/100*parseInt(riskPercent.value)
    setSumToSpend(sum)
}
