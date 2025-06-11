import './App.css';
import React, { useState } from "react";

function Calculator() {
    const [result, setResult] = useState("");
    const [ariaMessage, setAriaMessage] = React.useState("")

    const handleClick = (value) => {
        if (value === "=") {
            try {
                const evalResult = eval(result);
                setResult(String(evalResult));
                setAriaMessage(`Результат равен ${evalResult}`)
            } catch (error) {
                setResult("Ошибка")
                setAriaMessage(`Ошибка в выражении`)
            }
        }
        else {
            setResult(prevResult => prevResult + value);
            setAriaMessage("")
        }
    };

    return (
        <div className="App">
            <h1 className="Visually-hidden">Калькулятор</h1>
            <div className="Result">
                <input className="Result-input" id="result" value={result} readOnly />
                <button className="Button-clear" onClick={() => setResult("")} aria-label="Очистить">
                    C
                </button>
                <div aria-live="assertive" className="Visually-hidden">
                    {ariaMessage}
                </div>
            </div>

            <div className="calc-numbers">
                    <button className="Button-item" onClick={() => handleClick("7")}>
                        7
                    </button>
                    <button className="Button-item" onClick={() => handleClick("8")}>
                        8
                    </button>
                    <button className="Button-item" onClick={() => handleClick("9")}>
                        9
                    </button>
                    <button className="Button-item" aria-label="Умножить" onClick={() => handleClick("*")}>
                        x
                    </button>
                    <button className="Button-item" onClick={() => handleClick("4")}>
                        4
                    </button>
                    <button className="Button-item" onClick={() => handleClick("5")}>
                        5
                    </button>
                    <button className="Button-item" onClick={() => handleClick("6")}>
                        6
                    </button>
                    <button className="Button-item" aria-label="Вычесть" onClick={() => handleClick("-")}>
                        -
                    </button>
                    <button className="Button-item" onClick={() => handleClick("1")}>
                        1
                    </button>
                    <button className="Button-item" onClick={() => handleClick("2")}>
                        2
                    </button>
                    <button className="Button-item" onClick={() => handleClick("3")}>
                        3
                    </button>
                    <button className="Button-item" aria-label="Прибавить" onClick={() => handleClick("+")}>
                        +
                    </button>
                    <button className="Button-item" aria-label="Минус" onClick={() => handleClick("-")}>
                        +/-
                    </button>
                    <button className="Button-item" onClick={() => handleClick("0")}>
                        0
                    </button>
                    <button className="Button-item" aria-label="Разделить" onClick={() => handleClick("/")}>
                        /
                    </button>
                    <button className="Button-item" aria-label="Равно" onClick={() => handleClick("=")}>
                        =
                    </button>
            </div>

        </div>
    );
}

export default Calculator;

