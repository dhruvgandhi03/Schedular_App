import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Frontend components/LoginPage/LoginPage";
import SignupPage from "./Frontend components/LoginPage/SignupPage";
import HomePage from "./Frontend components/Homepage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/loginpage" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
