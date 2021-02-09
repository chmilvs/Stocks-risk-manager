export const fetchTickers = (tickerName, setLoading, setInfo, setBtnShow, setFailureMssg, setActualPrice) => {
    if (tickerName !== null) {
        let URL = `https://financialmodelingprep.com/api/v3/historical-chart/15min/${tickerName.toUpperCase()}?apikey=177f85e2b6952025a408c9466f631348`
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
        let urlForActualPrice = `https://financialmodelingprep.com/api/v3/quote-short/${tickerName.toUpperCase()}?apikey=177f85e2b6952025a408c9466f631348`
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
    let urlForActualPrice2 = `https://financialmodelingprep.com/api/v3/quote-short/${tickerName.toUpperCase()}?apikey=177f85e2b6952025a408c9466f631348`
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
    const {name} = event.target;
    let time = '';

    if (name === '1day') time = 'historical-price-full'
    else if (name === '4hour') time = 'historical-chart/4hour'
    else if (name === '15min') time = 'historical-chart/15min'
    let URL2 = `https://financialmodelingprep.com/api/v3/${time}/${tickerName.toUpperCase()}?apikey=177f85e2b6952025a408c9466f631348`
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