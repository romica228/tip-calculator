import React from "react";
import "./RightSide.css";

const RightSide = function ({ tipAmount, total, handleResetButton }) {
  return (
    <div className="right-side">
      <label className="label1">
        Tip Amount<p>/ person</p>
        <p>${tipAmount}</p>
      </label>
      <label className="label2">
        Total<p>/ person</p>
        <p>${total}</p>
      </label>
      {total ? (
        <button className="reset-button" onClick={handleResetButton}>
          RESET
        </button>
      ) : (
        <button className="reset-button" disabled>
          RESET
        </button>
      )}
    </div>
  );
};

export default RightSide;
