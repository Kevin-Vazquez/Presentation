import { useState } from "react";
import Register from "./components/register";
import "./index.css";
import Navigation from "./components/navigation";

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="container">
      <Navigation/>
      {
        !pressed && 
        <div className="presentation">
          disculpa
          
        </div>
      }
      {
        pressed && <Register/>
      }
      
    </div>
  );
}

export default App;
