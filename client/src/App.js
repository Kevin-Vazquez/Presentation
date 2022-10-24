import { useState } from "react";
import Register from "./components/register";
import "./index.css";
import Navigation from "./components/navigation";
import { BsChevronDown } from "react-icons/bs";

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="container">
      <Navigation/>
      {
        !pressed && 
        <div className="presentation">
          <div className="presentation-header">
            <h1>Hi! I am Kevin Vazquez and i build web applications.</h1>
            <div className="info-to-scroll-container">
              <p className="info-to-scrollDown-p">Scroll down to learn more about me.</p>
              <p className="info-to-scrollDown-icon"><BsChevronDown/></p>
            </div>
          </div>
        </div>
      }
      {
        pressed && <Register/>
      }
      
    </div>
  );
}

export default App;