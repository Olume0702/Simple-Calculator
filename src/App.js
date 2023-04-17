import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("0");
    } else if (value === "=") {
      try {
        setResult(eval(expression));
        setExpression("");
      } catch (error) {
        setResult("Error");
      }
    } else {
      setExpression((prevExpression) => prevExpression + value);
      setResult((prevResult) => prevResult + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" id="result" value={result} readOnly />
      <div className="buttons">
        <button className="operator" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="operator" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="operator" onClick={() => handleClick("*")}>
          *
        </button>
        <button className="operator" onClick={() => handleClick("/")}>
          /
        </button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="clear" onClick={() => handleClick("C")}>
          C
        </button>
        <button className="calculate" onClick={() => handleClick("=")}>
          =
        </button>
      </div>
    </div>
  );
}
