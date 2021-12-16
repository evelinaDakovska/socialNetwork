import styles from "./Register.module.css";

import { useContext } from "react";
import { useNavigate } from "react-router";

import * as authService from "../../services/authService";
import AuthContext from "../../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const registerHandler = (e) => {
    e.preventDefault();
    let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    authService.register(email, password).then((authData) => {
      login(authData);

      navigate("/dashboard");
    });
  };

  return (
    <div id={styles.registerContainer}>
      <form id={styles.registerForm} method="POST" onSubmit={registerHandler}>
        <fieldset>
          <legend>Register</legend>
          <p className={styles.field}>
            <input
              type="text"
              name="username"
              id={styles.username}
              placeholder="Enter Username *"
            />
          </p>
          <p className={styles.field}>
            <input
              type="firstName"
              name="firstName"
              id={styles.firstName}
              placeholder="Enter First Name *"
            />
          </p>
          <p className={styles.field}>
            <input
              type="lastName"
              name="lastName"
              id={styles.lastName}
              placeholder="Enter Last Name *"
            />
          </p>
          <p className={styles.field}>
            <input
              type="password"
              name="password"
              id={styles.password}
              placeholder="Enter Password *"
            />
          </p>
          <p className={styles.field}>
            <input
              type="password  "
              name="rePassword"
              id={styles.rePassword}
              placeholder="Repeat Password *"
            />
          </p>
          <input
            className={styles.buttonSubmit}
            type="submit"
            value="REGISTER"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
