import "./App.css";
import Home from "./components/pages/Home";
import Works from "./components/pages/Works";
import Contact from "./components/pages/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
