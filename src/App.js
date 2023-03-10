
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Home from "./compoments/Home";
import Auth from './features/Auth';


function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(useSelector((state) => state.user));
  useEffect(() => {
    if (user.current === {}) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [user]);
 
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/login' replace />} />
      <Route path="/home/*" element={<Home user={user} />} />
      <Route path="/login" element={<Auth authRoute={"login"} />} />
      <Route path="/register" element={<Auth authRoute={"register"} />} />
    </Routes>
  );
}

export default App;
