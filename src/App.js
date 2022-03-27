import React, { Fragment, useState } from "react";
import Button from "./components/UI/Button";
import "./App.css";
const App = () => {
  const [onScreen, setOnScreen] = useState("");
  const [result, setresult] = useState("");
  const [show, setShow] = useState(false);
  const [history, setHistory] = useState([]);

  const inputHandler = (event) => {
    setOnScreen(event.target.value);
  };
  const noHandler = (x) => {
    setOnScreen((preValue) => {
      return preValue.concat(x);
    });
  };

  const noHandler1 = () => {
    setOnScreen((preValue) => {
      const prevalLength = preValue.length - 1;
      return preValue.slice(0, prevalLength);
    });
  };

  const noHandler2 = () => {
    let qw = onScreen.split("");
    for (let index = 0; index < qw.length; index++) {
      const a = "/" || "*" || "-" || "+";
      if (qw[index] === "(") {
        if (!(/[/,*,-,+]/).test(qw[index-1])) {
          qw[index] = "*(";
        }
      }
    }
    qw = eval(qw.join(""))
    if(result === qw){
      setOnScreen(result + "")
       setresult("")
       return
    }else{
      setOnScreen((prev) => {
        let y = prev.split("");
        for (let index = 0; index < y.length; index++) {
          const a = "/" || "*" || "-" || "+";
          if (y[index] === "(") {
            if (!(/[/,*,-,+]/).test(qw[index-1])) {
              y[index] = "*(";
            }
          }
        }
        try {
          eval(y.join(""));
          setHistory((prev) => {
            return prev.concat({ one: y.join(""), two: eval(y.join("")) });
          });
          setresult(eval(y.join("")));
          return y.join("");
        } catch (error) {
          setOnScreen("Error");
          setresult("");
          setHistory([]);
        }
      });
    }
     
    }
  

  const noHandler3 = () => {
    setOnScreen("");
    setresult("");
  };

  const noHandler4 = () => {
    setOnScreen((prev) => {
      const y = prev.match(/[(,),-,/,*,+]/g);
      if (y === null) {
        return Math.pow(prev, 2);
      } else {
        let z = [];
        for (let index = 0; index < prev.length; index++) {
          for (let d = 0; d < y.length; d++) {
            if (prev[index] === y[d]) {
              if (!z.join("").includes(index)) {
                z.push(index);
              }
            }
          }
        }
        const zLastNumber = z[z.length - 1];
        const first = zLastNumber + 1;
        const f = prev.slice(first, prev[prev.length]);
        const g = prev.split("");
        for (let index = 0; index < f.length; index++) {
          g.pop();
        }
        const h = f / 100;
        g.push(h + "");
        return g.join("");
      }
    });
  };

  const noHandler5 = () => {
    setOnScreen((prev) => {
      const y = prev.match(/[(,),-,/,*,+]/g);
      if (y === null) {
        return Math.pow(prev, 2) + "";
      } else {
        let z = [];
        for (let index = 0; index < prev.length; index++) {
          for (let d = 0; d < y.length; d++) {
            if (prev[index] === y[d]) {
              if (!z.join("").includes(index)) {
                z.push(index);
              }
            }
          }
        }
        const zLastNumber = z[z.length - 1];
        const first = zLastNumber + 1;
        const f = prev.slice(first, prev[prev.length]);
        const g = prev.split("");
        for (let index = 0; index < f.length; index++) {
          g.pop();
        }
        const h = Math.pow(f, 2);
        g.push(h + "");
        return g.join("");
      }
    });
  };
  const noHandler6 = () => {
    setOnScreen((prev) => {
      const y = prev.match(/[(,),-,/,*,+]/g);
      if (y === null) {
        return Math.pow(prev, 0.5) + "";
      } else {
        let z = [];
        for (let index = 0; index < prev.length; index++) {
          for (let d = 0; d < y.length; d++) {
            if (prev[index] === y[d]) {
              if (!z.join("").includes(index)) {
                z.push(index);
              }
            }
          }
        }
        const zLastNumber = z[z.length - 1];
        const first = zLastNumber + 1;
        const f = prev.slice(first, prev[prev.length]);
        const g = prev.split("");
        for (let index = 0; index < f.length; index++) {
          g.pop();
        }
        const h = Math.pow(f, 0.5);
        g.push(h + "");
        return g.join("");
      }
    });
  };
  const noHandler7 = () => {
    setOnScreen((prev) => {
      return prev.concat("(");
    });
  };
  const noHandler8 = () => {
    setOnScreen((prev) => {
      return prev.concat(")");
    });
  };
  const noHandler9 = () => {
    setresult("");
  };
  const noHandler10 = () => {
    setShow(true);
  };
  const noHandler11 = () => {
    setShow(false);
  };
  const noHandler12 = () => {
    setOnScreen((prev) => {
      return prev.concat(".");
    });
  };
  let modalResult = <p className="modal-bkgrd">No calculation available</p>;
  if (history.length > 0) {
    modalResult = (
      <div
        className={`${
          history.length > 0 ? "modal-bkgrd modal-bkgrd-color " : "modal-bkgrd"
        }`}
      >
        {history.map((x) => {
          return (
            <p className="modal-inner" key={Math.random()}>
              <span
                onClick={() => {
                  setShow(false);
                  setOnScreen(x.one);
                  setresult("");
                }}
              >
                {x.one}
              </span>
              <span
                onClick={() => {
                  setShow(false);
                  setOnScreen(x.one);
                  setresult("");
                }}
              >
                ={x.two}
              </span>
            </p>
          );
        })}
      </div>
    );
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "+", "/", "*"];
  return (
    <div className="xnter">
      <div className="cal-wrapper">
        {show && (
          <div className="modal" onClick={noHandler11}>
            {modalResult}
          </div>
        )}
        <input type="text" value={onScreen} onChange={inputHandler} />
        <p className="result">{result}</p>
        <div className="cal-button">
          {numbers.map((button) => {
            return (
              <Button
                key={Math.random()}
                number={button}
                noHandler={noHandler}
              />
            );
          })}
          <button className="spec-button" onClick={noHandler1}>
            {"<--"}
          </button>
          <button className="spec-button history-size" onClick={noHandler10}>
            {"History"}
          </button>

          <button className="spec-button" onClick={noHandler4}>
            {"%"}
          </button>
          <button className="spec-button" onClick={noHandler5}>
            {"x2"}
          </button>
          <button className="spec-button" onClick={noHandler6}>
            {"x^1/2"}
          </button>
          <button className="spec-button" onClick={noHandler7}>
            {"("}
          </button>
          <button className="spec-button" onClick={noHandler8}>
            {")"}
          </button>
          <button className="spec-button" onClick={noHandler12}>
            {"."}
          </button>
          <button className="spec-button" onClick={noHandler3}>
            {"C"}
          </button>
          <button className="spec-button" onClick={noHandler9}>
            {"CE"}
          </button>
          <button className="spec-button equal-button" onClick={noHandler2}>
            {"="}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
