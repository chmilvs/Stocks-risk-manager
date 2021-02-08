import {GET_ALL_STOCKS} from "./utils";

export const getStocks = async () =>{
    let namesForList = []
    const stocks = await fetch(GET_ALL_STOCKS)
    const jsonStocks = await stocks.json()
    jsonStocks.securities.data.map(el=>{
        namesForList.push({name:el[0],value:el[1]},{name:el[0],value:el[6]})
        return namesForList
    })
}