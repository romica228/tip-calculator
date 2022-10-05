import "./LeftSide.css";
import { ReactComponent as Icon1 } from "../images/icon-dollar.svg";
import { ReactComponent as Icon2 } from "../images/icon-person.svg";

const LeftSide = function () {
  return (
    <div className="left-side">
      <label className="label">Bill</label>
      <input placeholder="0" type="text"></input>
      <label className="label">Select Tip %</label>
      <button>5%</button>
      <button>10%</button>
      <button>15%</button>
      <button>25%</button>
      <button>50%</button>
      <input className="custom" placeholder="Custom" type="text"></input>
      <label className="label">Number of People</label>
      <input placeholder="0" type="text"></input>
      <Icon1 className="icon-1" />
      <Icon2 className="icon-2" />
    </div>
  );
};

export default LeftSide;
