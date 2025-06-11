import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function Calculator() {
    const [result, setResult] = useState(""); // Объявляем состояние "result"

    const handleClick = (value) => {
        // Определяем функцию "handleClick"
        if (value === "=") {
            try {
                const evalResult = eval(result);
                setResult(String(evalResult));
            } catch (error) {
                setResult("Ошибка")
            }
        }
        else {
            setResult(prevResult => prevResult + value);
        }
    };

    return (
        <div className="App">
            <div className="Result">
                <input
                    className="Result-input"
                    id="result"
                    value={result}
                    readOnly
                />
                <button className="Button-clear" onClick={() => setResult("")} aria-label="Очистить">C</button>
            </div>

            <div className="calc-numbers">
                <div className="row-1">
                    <button className="Button-item" onClick={() => handleClick("7")}>
                        7
                    </button>
                    <button className="Button-item" onClick={() => handleClick("8")}>
                        8
                    </button>
                    <button className="Button-item" onClick={() => handleClick("9")}>
                        9
                    </button>
                    <button className="Button-item" onClick={() => handleClick("*")}>
                        x
                    </button>
                </div>
                <div className="row-2">
                    <button className="Button-item" onClick={() => handleClick("4")}>
                        4
                    </button>
                    <button className="Button-item" onClick={() => handleClick("5")}>
                        5
                    </button>
                    <button className="Button-item" onClick={() => handleClick("6")}>
                        6
                    </button>
                    <button className="Button-item" onClick={() => handleClick("-")}>
                        -
                    </button>
                </div>
                <div className="row-3">
                    <button className="Button-item" onClick={() => handleClick("1")}>
                        1
                    </button>
                    <button className="Button-item" onClick={() => handleClick("2")}>
                        2
                    </button>
                    <button className="Button-item" onClick={() => handleClick("3")}>
                        3
                    </button>
                    <button className="Button-item" onClick={() => handleClick("+")}>
                        +
                    </button>
                </div>
                <div className="row-3">
                    <button className="Button-item" onClick={() => handleClick("-")}>
                        +/-
                    </button>
                    <button className="Button-item" onClick={() => handleClick("0")}>
                        0
                    </button>
                    <button className="Button-item" onClick={() => handleClick("/")}>
                        /
                    </button>
                    <button className="Button-item" onClick={() => handleClick("=")}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;

