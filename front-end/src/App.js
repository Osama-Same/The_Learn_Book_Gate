import "./App.css";
import PageSearch from "./components/PageSearch";
import PageDisplay from "./components/PageDisplay";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageSearch />
        <PageDisplay />
      </div>
    </BrowserRouter>
  );
}

export default App;
