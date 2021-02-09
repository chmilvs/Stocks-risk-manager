import React from 'react';
import RiskForm from "./RiskForm/RiskForm";
import Stocks from "./Stocks/Stocks";
import Chart from "./Chart/Chart";

function RiskPage() {
    return (
        <>
            <RiskForm/>
            <Stocks/>
            <Chart/>
        </>
    );
}

export default RiskPage;
