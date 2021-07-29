import Cell from "./cell";
import Row from "./row";

const tableTitles = [
  "Название",
  "Автор",
  "Год",
  "Категория",
  "Описание",
  "Рейтинг",
];

function TableComponent({ data }) {
  return (
    <table>
      <thead>
        <tr>
          {tableTitles.map((title, index) => (
            <Cell type="HEAD" key={index} data={title} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.tableData.map((book, index) => (
          <Row book={book} key={index} />
        ))}
      </tbody>
      <tfoot>
        <tr></tr>
      </tfoot>
    </table>
  );
}

TableComponent.propTypes = {};

export default TableComponent;
