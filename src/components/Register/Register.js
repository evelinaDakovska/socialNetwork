import styles from "./Register.module.css";

import { useContext, useRef } from "react";
import { useNavigate } from "react-router";

import * as authService from "../../services/authService";
import AuthContext from "../../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const registerHandler = (e) => {
    e.preventDefault();
    let { email, password, fullName } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    authService.register(email, password, fullName).then((authData) => {
      login(authData);

      navigate("/home");
    });
  };

  const textInput = useRef(null);

  const nameValidation = (e) => {
    e.preventDefault();
    let fullName = e.target.value;
    if (fullName.length < 5) {
      alert("Full name should be at least 5 letters");
    }
    if(!/^[a-zA-Z]+$/.test(fullName)){
      alert("Full name should contain only letters")
    }
  };

  const rePassValidation = (e) => {
    e.preventDefault();
    let rePassword = e.target.value;
    let password = textInput.current.value;
    if (password !== rePassword) {
      alert("Passwords must match");
    }
  };

  return (
    <div id={styles.registerContainer}>
      <form id={styles.registerForm} method="POST" onSubmit={registerHandler}>
        <fieldset>
          <legend>Register</legend>
          <p className={styles.field}>
            <input
              type="text"
              name="email"
              placeholder="Enter email *"
              required
            />
          </p>
          <p className={styles.field}>
            <input
              type="fullName"
              name="fullName"
              placeholder="Enter Your Name *"
              onBlur={nameValidation}
              required
            />
          </p>
          <p className={styles.field}>
            <input
              type="password"
              name="password"
              placeholder="Enter Password *"
              ref={textInput}
              required
            />
          </p>
          <p className={styles.field}>
            <input
              type="password"
              name="rePassword"
              placeholder="Repeat Password *"
              onBlur={rePassValidation}
              required
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
