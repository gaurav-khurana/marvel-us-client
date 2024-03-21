import "./App.css";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Disney from "./pages/Disney/Disney";
import Netflix from "./pages/Netflix/Netflix";
import PrimeVideo from "./pages/PrimeVideo/PrimeVideo";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" /> */}
          <Route path="/home" element={<Homepage />} />
          <Route path="/disney" element={<Disney />} />
          <Route path="/netflix" element={<Netflix />} />
          <Route path="/primevideo" element={<PrimeVideo />} />
        </Routes>
      </BrowserRouter>
      <a href="/home">
        <h1 className="App-title">Enter Marvel Universe</h1>
      </a>
    </div>
  );
}

export default App;
