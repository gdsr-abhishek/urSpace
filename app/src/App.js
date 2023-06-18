import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Views/Login/Login';
import Profile from './Views/Profile/Profile';
import Homepage from './Views/Homepage/Homepage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
