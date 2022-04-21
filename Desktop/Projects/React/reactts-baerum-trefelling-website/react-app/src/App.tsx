import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
