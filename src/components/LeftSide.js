import "./LeftSide.css";
import { ReactComponent as Icon1 } from "../images/icon-dollar.svg";
import { ReactComponent as Icon2 } from "../images/icon-person.svg";

const LeftSide = function () {
  return (
    <div className="left-side">
      <label className="label">Bill</label>
      <input className="bill-number" placeholder="0"></input>
      <label className="label">Select Tip %</label>
      <button>5%</button>
      <button>10%</button>
      <button>15%</button>
      <button>25%</button>
      <button>50%</button>
      <button>Custom</button>
      <label className="label">Number of People</label>
      <input className="people-number" placeholder="0"></input>
      <Icon1 className="icon-1" />
      <Icon2 className="icon-2" />
    </div>
  );
};

export default LeftSide;
