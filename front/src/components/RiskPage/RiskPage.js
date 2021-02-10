import React, {useState} from 'react';
import RiskForm from "./RiskForm/RiskForm";
import CalculationField from '../CalculationField/CalculationField'
import StockChartInfoFinal from '../StockChartInfo/StockChartInfoFinal';
import ButtonsForTimePeriods from '../StockChartInfo/ButtonsForTimePeriods'

function RiskPage(props) {
    const [loading, setLoading] = useState(false)
    const [sumToSpend, setSumToSpend] = useState(0)
    const [info, setInfo] = useState(null)
    const [actualPrice, setActualPrice] = useState(null)
    const [stockName, setStockName] = useState(null);
    const [failureMssg, setFailureMssg] = useState('')

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div>
                <RiskForm stockName={stockName} setSumToSpend={setSumToSpend} stockName={stockName}
                          setStockName={setStockName} failureMssg={failureMssg}/>
            </div>
            <div>

                <StockChartInfoFinal loading={loading} setLoading={setLoading} setSumToSpend={setSumToSpend} info={info}
                                     setInfo={setInfo} setFailureMssg={setFailureMssg} setActualPrice={setActualPrice}
                                     actualPrice={actualPrice} tickerName={stockName}/>
                <ButtonsForTimePeriods loading={loading} info={info}/>
                <CalculationField loading={loading} sumToSpend={sumToSpend} info={info} actualPrice={actualPrice}/>

            </div>
        </div>
    );
}

export default RiskPage;
