import {GET_ALL_STOCKS} from "../redux/utils/utils";

export const fetchTickers = (tickerName, setLoading, setInfo, setBtnShow, setFailureMssg, setActualPrice) => {
    if (tickerName !== null) {
        console.log('here1')
        let URL = `https://financialmodelingprep.com/api/v3/historical-chart/15min/${tickerName}?apikey=5473effdc3cb747accb2a2daaae3c8dd`
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

        setLoading(true)
        let urlForActualPrice = `https://financialmodelingprep.com/api/v3/quote-short/${tickerName}?apikey=5473effdc3cb747accb2a2daaae3c8dd`
        fetch(urlForActualPrice)
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
}

export const refreshActualPrice = (tickerName, setFailureMssg, setActualPrice, setBtnShow, setLoading) => {
    console.log('here3')

    let urlForActualPrice2 = `https://financialmodelingprep.com/api/v3/quote-short/${tickerName}?apikey=5473effdc3cb747accb2a2daaae3c8dd`
    fetch(urlForActualPrice2)
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

    if (name === '1day') time = 'historical-price-full'
    else if (name === '4hour') time = 'historical-chart/4hour'
    else if (name === '15min') time = 'historical-chart/15min'
    let URL2 = `https://financialmodelingprep.com/api/v3/${time}/${tickerName}?apikey=5473effdc3cb747accb2a2daaae3c8dd`
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
}

export const getStocks = async () =>{
    const res = await fetch(GET_ALL_STOCKS)
    const jsonedRes = await res.json()

    const stocksArray = await jsonedRes.map(el=>{
        return {name:`${el.name} ${el.symbol}`,value:el.symbol}
    })
    return stocksArray
}
