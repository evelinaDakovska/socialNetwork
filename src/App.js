import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <Routes>
          <Route path="/all-posts" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
