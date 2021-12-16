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
    let { email, password,firstName, lastName } = Object.fromEntries(new FormData(e.currentTarget));

    authService.register(email, password, firstName, lastName).then((authData) => {
      login(authData);

      navigate("/home");
    });
  };

  return (
    <div id={styles.registerContainer}>
      <form id={styles.registerForm} method="POST" onSubmit={registerHandler}>
        <fieldset>
          <legend>Register</legend>
          <p className={styles.field}>
            <input type="text" name="email" placeholder="Enter email *" />
          </p>
          <p className={styles.field}>
            <input
              type="firstName"
              name="firstName"
              placeholder="Enter First Name *"
            />
          </p>
          <p className={styles.field}>
            <input
              type="lastName"
              name="lastName"
              placeholder="Enter Last Name *"
            />
          </p>
          <p className={styles.field}>
            <input
              type="password"
              name="password"
              placeholder="Enter Password *"
            />
          </p>
          <p className={styles.field}>
            <input
              type="password"
              name="Password"
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
