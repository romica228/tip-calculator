import React, { useState, useEffect } from "react";
import "./LeftSide.css";
import { ReactComponent as Icon1 } from "../images/icon-dollar.svg";
import { ReactComponent as Icon2 } from "../images/icon-person.svg";
import RightSide from "../components/RightSide";

const LeftSide = function () {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  useEffect(() => {
    if (bill > 0 && people > 0 && tip > 0) {
      const tipCalc = (bill * (tip / 100)) / people;
      const totalCalc = bill * (tip / 100);
      setTipAmount(tipCalc.toFixed(0));
      setTotal(totalCalc.toFixed(0));
    }
  }, [bill, people, tip, tipAmount, total]);

  const handleSelectedTip = function (event) {
    setTip(+event.target.value);
  };

  const handleResetButton = (e) => {
    setBill("");
    setTip("");
    setPeople("");
    setTipAmount("0.00");
    setTotal("0.00");
  };

  return (
    <div className="left-side">
      <label className="label">Bill</label>
      <input
        placeholder="0"
        type="number"
        min="0"
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
        onChange={(event) => setBill(+event.target.value)}
      ></input>
      <label className="label">Select Tip %</label>
      <button className="button-1" onClick={handleSelectedTip} value={5}>
        5%
      </button>
      <button className="button-2" onClick={handleSelectedTip} value={10}>
        10%
      </button>
      <button onClick={handleSelectedTip} value={15}>
        15%
      </button>
      <button onClick={handleSelectedTip} value={25}>
        25%
      </button>
      <button onClick={handleSelectedTip} value={50}>
        50%
      </button>
      <input
        className="custom"
        placeholder="Custom"
        type="number"
        min="0"
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
        onChange={handleSelectedTip}
      ></input>
      <label className="label">Number of People</label>
      <input
        className="input"
        placeholder="0"
        type="number"
        min="0"
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
        onChange={(event) => setPeople(+event.target.value)}
      ></input>
      <Icon1 className="icon-1" />
      <Icon2 className="icon-2" />
      <RightSide
        tipAmount={tipAmount}
        total={total}
        handleResetButton={handleResetButton}
      />
    </div>
  );
};

export default LeftSide;
