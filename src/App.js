import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppSwitch from "./routes";

function App() {
  return (
    <Router>
      <AppSwitch />
    </Router>
  );
}

export default App;
