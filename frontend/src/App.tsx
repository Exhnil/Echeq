import Board from "./components/board/board";

function App() {
  return (
    <div className="app-container">
      <header className="navbar">
        <h1>Echeq</h1>
      </header>
      <main className="main-content">
        <div className="board-container">
          <Board></Board>
        </div>
      </main>
    </div>
  );
}

export default App;
