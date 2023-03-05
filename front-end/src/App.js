import "./App.css";
import PageSearch from "./components/PageSearch";
import PageDisplay from "./components/PageDisplay";
import { PageDetails } from "./components/PageDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageSearch />
        <Routes>
          <Route path="/" element={<PageDisplay />} />
          <Route path="/book/:_id" element={<PageDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
