import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "./index.css"

function App() {
  return (
    <>
      <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/vans" element={<Vans/>} />
        </Routes>
      </BrowserRouter>
      <h1>Welcome to React-Route-Dom</h1>
    </>
  );
}

export default App;
