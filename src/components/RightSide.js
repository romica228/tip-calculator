import "./RightSide.css";

const RightSide = function () {
  return (
    <div className="right-side">
      <label className="label1">
        Tip Amount<p>/ person</p>
        <p>$0.00</p>
      </label>
      <label className="label2">
        Total<p>/ person</p>
        <p>$0.00</p>
      </label>
      <button className="reset-button">RESET</button>
    </div>
  );
};

export default RightSide;
