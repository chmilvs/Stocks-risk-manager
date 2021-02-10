import React, {useEffect, useState, memo} from 'react';
import {fetchTickers, refreshActualPrice, refreshData} from '../../fetchFunctions/fetchFunction'

function ButtonsForTimePeriods({tickerName, loading, setLoading, sumToSpend, info, setInfo, setFailureMssg, setActualPrice, actualPrice}) {
    const [btnShow, setBtnShow] = useState(false)

    useEffect(() => {
        fetchTickers(tickerName, setLoading, setInfo, setBtnShow, setFailureMssg, setActualPrice)
    }, [tickerName])

    return (
        <>
            <div style={{marginTop: "210px"}}>
                <div style={{marginLeft: "160px"}}>
                    {tickerName && <div style={{display: "flex"}}>
                        <button onClick={(event) => {
                            refreshData(event, tickerName, setLoading, setFailureMssg, setInfo, setBtnShow)
                        }} type="button"
                                style={{
                                    marginRight: "5px",
                                    fontSize: "8pt",
                                    backgroundColor: "#8884d8",
                                    paddingLeft: "5px",
                                    paddingRight: "5px"
                                }} name="15min"
                                className="button primary smallButtons">15 мин
                        </button>
                        <button onClick={(event) => {
                            refreshData(event, tickerName, setLoading, setFailureMssg, setInfo, setBtnShow)
                        }} type="button"
                                style={{
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    fontSize: "8pt",
                                    backgroundColor: "#8884d8",
                                    paddingLeft: "5px",
                                    paddingRight: "5px"
                                }} name="4hour"
                                className="button primary smallButtons">4 часа
                        </button>
                        <button onClick={(event) => {
                            refreshData(event, tickerName, setLoading, setFailureMssg, setInfo, setBtnShow)
                        }} type="button"
                                style={{
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    fontSize: "8pt",
                                    backgroundColor: "#8884d8",
                                    paddingLeft: "5px",
                                    paddingRight: "5px"
                                }} name="1day"
                                className="button primary smallButtons">1 день
                        </button>
                        <button onClick={() => {
                            refreshActualPrice(tickerName, setFailureMssg, setActualPrice, setBtnShow, setLoading)
                        }} type="button"
                                style={{
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    fontSize: "8pt",
                                    backgroundColor: "#8884d8",
                                    paddingLeft: "5px",
                                    paddingRight: "5px"
                                }}
                                className="button primary smallButtons">Обновить текущую цену
                        </button>
                        <div style={{fontSize: "30px", fontWeight: "bold", marginLeft: "15px"}}>
                            {actualPrice} USD
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default memo(ButtonsForTimePeriods);
