// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import LogoutButton from "./components/LogoutButton";

const App = () => {
  return (
    <Router>
      <div>
        <h1>認証アプリ</h1>
        <nav>
          <a href="/signup">Sign Up</a> | <a href="/login">Login</a> | <a href="/mypage">My Page</a>
        </nav>
        <LogoutButton />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
