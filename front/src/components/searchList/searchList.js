import React,{useState,useEffect} from 'react';
import SelectSearch, {fuzzySearch} from "react-select-search";
import {GET_ALL_STOCKS} from "../../redux/utils/utils";
import s from './searchList.module.css'
import {getStocks} from "../../fetchFunctions/fetchFunction";

function SearchList({stockName, setStockName}) {
    const [stockArr,setStockArr] = useState([])
    useEffect(async() => {
        let stockSymbols = await getStocks()
        if(stockSymbols.length >0){
            setStockArr(stockSymbols)
        }
        else{
            setStockArr([])
        }
    }, [])

    return (
       stockArr && <SelectSearch

            className={s.select}
            value={stockName}
            onChange={setStockName}
            options={stockArr}
            filterOptions={(options) => {
                const filter = fuzzySearch(options);

        return (q) => filter(q).slice(0, 5);
      }}

      search
      placeholder="Введите название акции или тикера"
    />
  );
}

export default SearchList;

