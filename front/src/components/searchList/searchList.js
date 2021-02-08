import React from 'react';
import SelectSearch, {fuzzySearch} from "react-select-search";
import {GET_ALL_STOCKS} from "../../redux/utils/utils";

function SearchList({stockName, setStockName}) {
    return (
        <SelectSearch
            value={stockName}
            onChange={setStockName}
            options={[]}
            filterOptions={(options) => {
                const filter = fuzzySearch(options);

                return (q) => filter(q).slice(0, 5);
            }}            getOptions={() => {
                return new Promise((resolve, reject) => {
                    fetch(GET_ALL_STOCKS)
                        .then(response => response.json())
                        .then(jsonStocks => {
                            resolve(jsonStocks.securities.data.map(el => ({value: el[0], name: `${el[1]} ${el[6]}`})))
                        })
                        .catch(reject);
                });
            }}
            search
            placeholder="Введите название акции"
        />
    )
}

export default SearchList;