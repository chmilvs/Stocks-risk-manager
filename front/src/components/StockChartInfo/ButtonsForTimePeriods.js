import React, {useEffect, useState, memo} from 'react';
import {fetchTickers, refreshActualPrice, refreshData} from '../../fetchFunctions/fetchFunction'

function ButtonsForTimePeriods({tickerName, setLoading, setInfo, setFailureMssg, setActualPrice, actualPrice}) {
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
                                    borderRadius: "5px 0px 0px 5px",
                                    fontSize: "8pt",
                                    backgroundColor: "#45AD7E",
                                    paddingLeft: "5px",
                                    paddingRight: "5px",
                                    width:"60px"
                                }} name="15min"
                                className="button primary smallButtons">15 мин
                        </button>
                        <button onClick={(event) => {
                            refreshData(event, tickerName, setLoading, setFailureMssg, setInfo, setBtnShow)
                        }} type="button"
                                style={{

                                    borderRadius: "0px",
                                    fontSize: "8pt",
                                    backgroundColor: "#45AD7E",
                                    paddingLeft: "5px",
                                    paddingRight: "5px",
                                    width:"60px"
                                }} name="4hour"
                                className="button primary smallButtons">4 часа
                        </button>
                        <button onClick={(event) => {
                            refreshData(event, tickerName, setLoading, setFailureMssg, setInfo, setBtnShow)
                        }} type="button"
                                style={{
                                    borderRadius: "0px 5px 5px 0px",
                                    marginRight: "5px",
                                    fontSize: "8pt",
                                    backgroundColor: "#45AD7E",
                                    paddingLeft: "5px",
                                    paddingRight: "5px",
                                    width:"60px"
                                }} name="1day"
                                className="button primary smallButtons">1 день
                        </button>

                        <div style={{fontSize: "30px", fontWeight: "bold", marginLeft: "70px"}}>
                            {actualPrice} USD
                        </div>
                        <button onClick={() => {
                            refreshActualPrice(tickerName, setFailureMssg, setActualPrice, setBtnShow, setLoading)
                        }} type="button"
                                style={{
                                    marginLeft:"10px",
                                    fontSize: "8pt",
                                    backgroundColor: "#45AD7E",
                                    paddingLeft: "5px",
                                    paddingRight: "5px",
                                    width:"50px"
                                }}
                                className="button primary smallButtons"><i className="fas fa-sync"></i>
                        </button>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default memo(ButtonsForTimePeriods);
