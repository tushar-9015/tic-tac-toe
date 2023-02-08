import "./App.css";

export default function Square({ value, onSquareClick }) {
    return (
      <span className="square" onClick={onSquareClick}>
        {value}
      </span>
    );
  }