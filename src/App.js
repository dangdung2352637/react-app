import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./component/Nav";
import { Home } from "./component/Home";
import { Detail } from "./component/Detail";
import { About } from "./component/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Page1 />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/Detail" element={<Detail />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
