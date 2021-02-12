import React from 'react';

import {addStockAC} from "../../redux/actionCreators/stockAC";
import {useDispatch, useSelector} from "react-redux";

function InputStocks({setOpen, actualPrice, tickerName, valueToBuy, setText}) {
    const dispatch = useDispatch()
    const deposit = useSelector(state => state.auth.currentUser.deposit)
    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
        const {
            inquiry: {value: inquiry},
        } = event.target;
        console.log(inquiry,inquiry*valueToBuy,deposit);
        if ((Number(inquiry) * Number(valueToBuy) <= Number(deposit)) && (Number(inquiry) * Number(valueToBuy) > 0)) dispatch(addStockAC({inquiry, actualPrice, tickerName}))
        // else setText(`Превышена сумма имеющихся средств`)
    }
    return (
        <div>
            <form key={valueToBuy} style={{marginTop: "10px"}} onSubmit={handleSubmit}>
                <input name="inquiry" type="number" defaultValue={valueToBuy} ></input>
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
        </div>
    );
}

export default InputStocks;
