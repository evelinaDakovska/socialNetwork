import { Routes, Route } from "react-router-dom";

import AuthContext from "./contexts/AuthContext";
import useLocalStorage from "./hooks/useLocalStorage";

import NavBar from "./components/NavBar/NavBar";
import AllPosts from "./components/AllPosts/AllPosts";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import CreatePost from "./components/CreatePost/CreatePost";

const initialAuthState = {
  _id: "",
  email: "",
  accessToken: "",
};

function App() {
  const [user, setUser] = useLocalStorage("user", initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="App">
        <NavBar />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/all-posts" element={<AllPosts />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
