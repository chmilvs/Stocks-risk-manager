import React, {useState} from 'react';
import RiskForm from "./RiskForm/RiskForm";
import CalculationField from '../CalculationField/CalculationField'
import ButtonsForTimePeriods from '../StockChartInfo/ButtonsForTimePeriods';
import StockChartInfoFinal from '../StockChartInfo/StockChartInfoFinal'

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
            <div style={{paddingLeft:"5%"}}>
                <ButtonsForTimePeriods loading={loading} setLoading={setLoading} setSumToSpend={setSumToSpend} info={info}
                                     setInfo={setInfo} setFailureMssg={setFailureMssg} setActualPrice={setActualPrice}
                                     actualPrice={actualPrice} tickerName={stockName}/>
                <StockChartInfoFinal loading={loading} info={info}/>
                <CalculationField loading={loading} sumToSpend={sumToSpend} info={info} actualPrice={actualPrice}/>
            </div>
        </div>
    );
}

export default RiskPage;
