import "./App.css";
import { Button } from "react-bootstrap";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./auth/SignIn";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Ranking from "./pages/Ranking";
import DashboardLogin from "./pages/DashboardLogin";
import CreateMatch from "./pages/CreateMatch";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<Signup />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route path="/nav-rank" element={<DashboardLogin />}>
            <Route path="/nav-rank" element={<Ranking />} />
            <Route path="/nav-rank/create-match" element={<CreateMatch />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
