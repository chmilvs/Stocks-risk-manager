import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import ModalWindow from '../ModalWindow/ModalWindow'
import ModalWindowFalse from '../ModalWindow/ModalWindowFalse'
import InputStocks from "../StockChartInfo/InputStocks";

function CalculationField({loading, sumToSpend, info, actualPrice, tickerName}) {

  const [valueToBuy, setValueToBuy] = useState(Math.floor(sumToSpend / actualPrice))
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const [openFalse, setOpenFalse] = useState(false)
  const [text, setText] = useState('Акции добавлены в портфель!')
  const handleClick = () => {
    setOpen(false)
    history.push('/dashboard')
  }
  const handleClickFalse = () => {
    setOpenFalse(false)
  }
  useEffect(() => {
    setValueToBuy(Math.floor(sumToSpend / actualPrice));
  }, [sumToSpend, actualPrice, setValueToBuy]);

    return (
        <div>
            {!loading && info && <div style={{marginLeft: "160px"}}>
                {sumToSpend > 0 ? <ul className="alt">
                    Вывод:
                    <li>Текущая стоимость акции: {actualPrice} USD</li>
                    <li>Максимальное количеcтво акций к покупке: {valueToBuy} </li>
                    <InputStocks setOpen={setOpen} setOpenFalse={setOpenFalse} actualPrice={actualPrice} tickerName={tickerName} valueToBuy={valueToBuy} setText={setText}/>
                </ul> : null}
                    <ModalWindow open={open} setOpen={setOpen}  handleClick={handleClick} text={text} />
                    <ModalWindowFalse openFalse={openFalse} setOpenFalse={setOpenFalse} handleClickFalse={handleClickFalse} text={text} />
            </div>}
        </div>
    );
}

export default CalculationField
