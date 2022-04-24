import { Timer } from "./components/Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Timer timer={{ starttimer: 3, endtimer: 20 }} />
    </div>
  );
}

export default App;
