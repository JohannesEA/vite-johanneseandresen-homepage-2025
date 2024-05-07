import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";

//pages
import Home from "./pages/home/Home";
//components
import Footer from "./components/footer/Footer";
//styles
import GlobalStyle from "./universal/globalStyles";
import Service from "./pages/home/services/service/Service";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tjenester/:id" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
