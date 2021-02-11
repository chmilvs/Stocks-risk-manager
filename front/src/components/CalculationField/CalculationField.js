import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addStockAC } from '../../redux/actionCreators/stockAC';
// import { handleSubmit } from '../../fetchFunctions/fetchFunction'

function CalculationField({loading, sumToSpend, info, actualPrice, tickerName}) {
  const dispatch = useDispatch()
  const [valueToBuy, setValueToBuy] = useState(Math.floor(sumToSpend / actualPrice))
    const handleSubmit = (event) => {
  event.preventDefault()
  const { inquiry: { value: inquiry } } = event.target
  dispatch(addStockAC({ inquiry, actualPrice, tickerName }))
}
    useEffect(() => {
        setValueToBuy(Math.floor(sumToSpend / actualPrice))
    }, [sumToSpend, actualPrice])

    return (
        <div>
            {!loading && info && <div style={{marginLeft: "160px"}}>
                {sumToSpend > 0 ? <ul className="alt">
                    Вывод:
                    <li>Текущая стоимость акции: {actualPrice} USD</li>
                    <li>Максимальное количеcтво акций к покупке: {valueToBuy} </li>
                    <form style={{marginTop: "10px"}} onSubmit={handleSubmit}>
                        <input name="inquiry" type="number" onClick={e=>e.target.value=''} value={valueToBuy} placeholder="Или введите свои данные"></input>
                        <button
                            style={{
                                marginTop: "10px",
                                marginBottom: "100px",
                                height: "3em",
                                fontSize: "15pt",
                            }}
                            className="button primary">
                            Добавить
                        </button>
                    </form>
                </ul> : null}
            </div>}
        </div>
    );
}

export default CalculationField;
