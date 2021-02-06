import './Table.css';

function Table() {
  return (
    <div className="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Название компании</th>
          <th>Тикер</th>
          <th>Лот</th>
          <th>Цена сейчас, ₽</th>
          <th>Стоимость сейчас, ₽</th>
          <th>Цена покупки, ₽</th>
          <th>Стоимость покупки, ₽</th>
          <th>Прибыль, %</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ante turpis integer</td>
          <td>Item 1</td>
          <td>10</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>+/-</td>
        </tr>
        <tr>
        <td>Ante turpis integer</td>
          <td>Item 1</td>
          <td>10</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>+/-</td>
        </tr>
        <tr>
        <td>Ante turpis integer</td>
          <td>Item 1</td>
          <td>10</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>+/-</td>
        </tr>
        <tr>
        <td>Ante turpis integer</td>
          <td>Item 1</td>
          <td>10</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>+/-</td>
        </tr>
        <tr>
        <td>Ante turpis integer</td>
          <td>Item 1</td>
          <td>10</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>29.99</td>
          <td>+/-</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="7"></td>
          <td>100.00</td>
        </tr>
      </tfoot>
    </table>
  </div>
  );
}

export default Table;
