import { Routes, Route } from "react-router-dom";

import AuthContext from "./contexts/AuthContext";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
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
        <Header />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/all-posts" element={<Main />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
