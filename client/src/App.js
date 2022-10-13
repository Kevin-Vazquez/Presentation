import { useState } from "react";
import Register from "./components/register";
import "./index.css";

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="container">
      {
        !pressed && 
        <div className="presentation">
          <nav className="presentation-nav">
            <img src="https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc"/>
            <h3>Kevin Vazquez</h3>
            <ul>
              <li>HOME</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </div>
      }
      {
        pressed && <Register/>
      }
      
    </div>
  );
}

export default App;
