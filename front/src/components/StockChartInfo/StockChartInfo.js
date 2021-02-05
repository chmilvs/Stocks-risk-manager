import React, {useState} from 'react';

function StockChartInfo(props) {
  
  const [info, setInfo] = useState(null)
  const getInfo = (event) => {
    event.preventDefault()
    
    const { tickerName } = event.target

    fetch(`https://query1.finance.yahoo.com/v10/finance/quoteSummary/${tickerName.value}?modules=price`)
    .then(res => res.json())
    .then(data => setInfo(data))
  }
  console.log(info);

  return (
    <div>
      <form onSubmit={ getInfo }>
        <input type="text" name="tickerName"></input>
        <button type="submit">Search</button>
      </form>
      <div>
        {info}
      </div>
    </div>
  );
}

export default StockChartInfo;
