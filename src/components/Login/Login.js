import styles from "./Login.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.js";
import * as authService from "../../services/authService";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .login(email, password)
      .then((authData) => {
        login(authData);

        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div id={styles.loginContainer}>
      <form id={styles.loginForm} onSubmit={loginHandler} method="POST">
        <fieldset>
          <legend>Login</legend>
          <p className={styles.field}>
            <input
              type="text"
              name="email"
              id={styles.email}
              placeholder="Enter email"
              required
            />
          </p>
          <p className={styles.field}>
            <input
              type="password"
              name="password"
              id={styles.password}
              placeholder="Enter Password"
              required
            />
          </p>
          <input className={styles.buttonSubmit} type="submit" value="login" />
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
