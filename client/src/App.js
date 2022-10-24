import "./index.css";
import Navigation from "./components/navigation";
import Info from "./components/info";
import { BsChevronDown } from "react-icons/bs";

function App() {
  const click = ()=>{

  }
  return (
    <div className="container">
      <Navigation/>
        <div className="presentation">
          <div className="presentation-header">
            <h1>Hi! I am Kevin Vazquez and i build web applications.</h1>
            <div className="info-to-scroll-container" onClick={click}>
              <p className="info-to-scrollDown-p">Scroll down to learn more about me.</p>
              <p className="info-to-scrollDown-icon"><BsChevronDown/></p>
            </div>
          </div>
        </div>
        <Info/>
    </div>
  );
}

export default App;