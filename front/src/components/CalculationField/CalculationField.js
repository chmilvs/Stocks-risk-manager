import React from 'react';
import { handleSubmit } from '../../fetchFunctions/fetchFunction'

function CalculationField({loading, sumToSpend, info, actualPrice}) {

    return (
        <div>
            {!loading && info && <div style={{marginLeft: "160px"}}>
                {sumToSpend > 0 ? <ul className="alt">
                    Вывод:
                    <li>Текущая стоимость акции: {actualPrice} USD</li>
                    <li>Максимальное количетво акций к покупке: {Math.floor(sumToSpend / actualPrice)} </li>
                    <form style={{marginTop: "10px"}} onSubmit={(event) => handleSubmit(event)}>
                        <input name="inquiry" type="number" placeholder="Или введите свои данные"></input>
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