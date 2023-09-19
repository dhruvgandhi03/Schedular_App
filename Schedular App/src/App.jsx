import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Frontend components/LoginPage/LoginPage";
import SignupPage from "./Frontend components/LoginPage/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/loginpage" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
