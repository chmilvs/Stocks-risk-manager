import { ADD_STOCK } from "../types"
import { ADD_STOCK_URL } from "../utils/utils"
import { errorsAC } from "./errorAC"

const token = JSON.parse(localStorage.getItem('jwt'))

export const addStockAC = ({ actualPrice, tickerName, inquiry }) => (dispatch) => {
  fetch(ADD_STOCK_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ price: actualPrice, tickerName, amountBuyed: inquiry, token })
})
.then(res => res.json())
.then(newstock => {
  if(newstock.success) {
    dispatch(addStock(newstock.stock))
  } else {
    dispatch(errorsAC(newstock.message))
  }
})
}

export const addStock = (payload) => {
  return {
    type: ADD_STOCK,
    payload
  }
}
