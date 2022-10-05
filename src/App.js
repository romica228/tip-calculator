import "./App.css";
import { ReactComponent as Logo } from "./images/logo.svg";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="box">
      <Logo id="logo" />
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
