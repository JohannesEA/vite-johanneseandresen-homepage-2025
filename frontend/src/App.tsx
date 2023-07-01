import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/home/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutpage from "./pages/about/Aboutpage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/om" element={<Aboutpage />} />
          <Route element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
