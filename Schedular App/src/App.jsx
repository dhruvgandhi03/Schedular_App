import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Frontend components/LoginPage/LoginPage";
import SignupPage from "./Frontend components/LoginPage/SignupPage";
// import HomePage from "./Frontend components/Homepage/HomePage";
import HomePage from "./Frontend components/Nav_Side_bar/NavSidebar";
import Reminders from "./Frontend components/Reminders/Reminders";
import Main from "./Frontend components/Homepage/Main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="home" element={<HomePage />}>
            <Route path="homepage" element={<Main />} />
            <Route path="reminders" element={<Reminders />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
