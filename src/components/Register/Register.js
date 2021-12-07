import styles from "./Register.module.css";

const Register = () => {
  const registerHandler = (e) => {
    e.preventDefault();
    console.log("Registered!");
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
              type="rePassword"
              name="rePassword"
              id={styles.rePassword}
              placeholder="Repeat Password *"
            />
          </p>
          <input
            className={styles.buttonSubmit}
            type="submit"
            value="register"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
