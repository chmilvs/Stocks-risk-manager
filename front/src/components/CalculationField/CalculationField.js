import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addStockAC } from '../../redux/actionCreators/stockAC';
import {useHistory} from 'react-router-dom';
// import { handleSubmit } from '../../fetchFunctions/fetchFunction'
import ModalWindow from '../ModalWindow/ModalWindow'

function CalculationField({loading, sumToSpend, info, actualPrice, tickerName}) {
  const dispatch = useDispatch()
  const [valueToBuy, setValueToBuy] = useState(Math.floor(sumToSpend / actualPrice))
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    const {
      inquiry: { value: inquiry },
    } = event.target;
    dispatch(addStockAC({ inquiry, actualPrice, tickerName }));
  };
  useEffect(() => {
    setValueToBuy(Math.floor(sumToSpend / actualPrice));
  }, [sumToSpend, actualPrice]);

  const handleClick = () => {
    setOpen(false)
    history.push('/dashboard')
  }

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
                    <ModalWindow open={open} setOpen={setOpen} handleClick={handleClick} text={'Акции добавлены в портфель!'} />
            </div>}
        </div>
    );
}

export default CalculationField;
