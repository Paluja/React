import { useState } from "react";
import "./App.css";
import BasicForm from "./components/BasicForm/BasicForm";
import AdvancedForm from "./components/AdvancedForm/AdvancedForm";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic Form
        </h3>
        <h3
          style={{ color: view === "advanced" ? "#fff" : "" }}
          onClick={() => setView("advanced")}
        >
          Advanced Form
        </h3>
      </nav>
      {view === "basic" ? <BasicForm/> : <AdvancedForm/>}
    </div>
  );
}

export default App;
