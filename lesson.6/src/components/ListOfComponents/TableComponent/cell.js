function Cell({ type, data }) {
  return type === "HEAD" ? <th>{data}</th> : <td>{data}</td>;
}

Cell.propTypes = {};

export default Cell;
