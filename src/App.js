import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
import MobilePC from "./routes/MobilePC";
import Introduction from "./routes/Introduction";
import Network from "./routes/Network";
import Contact from "./routes/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/network" element={<Network />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mp" element={<MobilePC />} />
      </Routes>
    </Router>
  );
}

export default App;
