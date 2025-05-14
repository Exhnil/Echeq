import "./board.css";

function Board() {
  const width = 8;
  const height = 8;
  const column = Array.from({ length: width }, (_, col) => col + 1);
  const row = Array.from({ length: height }, (_, row) => row + 1);
  return (
    <div className="board">
      {row.map((rowIndex) =>
        column.map((colIndex) => (
          <div className={"square " + ((rowIndex + colIndex)%2 ===0 ? "light" : "dark")} key={rowIndex + "." + colIndex}>
           
          </div>
        ))
      )}
    </div>
  );
}

export default Board;
