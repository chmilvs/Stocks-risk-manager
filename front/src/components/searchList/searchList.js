import React from 'react';
import SelectSearch, {fuzzySearch} from "react-select-search";
import {GET_ALL_STOCKS} from "../../redux/utils/utils";
import s from './searchList.module.css'

function SearchList({stockName, setStockName}) {

    return (
        <SelectSearch
        
            className={s.select}
            value={stockName}
            onChange={setStockName}
            options={[]}
            filterOptions={(options) => {
                const filter = fuzzySearch(options);

        return (q) => filter(q).slice(0, 5);
      }}
      getOptions={() => {
        return new Promise((resolve, reject) => {
          fetch(GET_ALL_STOCKS)
            .then((response) => response.json())
            .then((jsonStocks) => {
              resolve(
                jsonStocks.map((el) => ({
                  value: el.symbol,
                  name: `${el.name} ${el.symbol}`,
                }))
              );
            })
            .catch(reject);
        });
      }}
      search
      placeholder="Введите название акции или тикер"
    />
  );
}

export default SearchList;
