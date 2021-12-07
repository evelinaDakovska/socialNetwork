import styles from "./Login.module.css";

const Login = () => {
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("Logged!");
  };

  return (
    <div id={styles.loginContainer}>
      <form id={styles.loginForm} method="POST" onSubmit={loginHandler}>
        <fieldset>
          <legend>Login</legend>
          <p className={styles.field}>
            <input
              type="text"
              name="username"
              id={styles.username}
              placeholder="Enter Username"
            />
          </p>
          <p className={styles.field}>
            <input
              type="password"
              name="password"
              id={styles.password}
              placeholder="Enter Password"
            />
          </p>
          <input className={styles.buttonSubmit} type="submit" value="login" />
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
