import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import styles from "./Login.module.scss";

const Login = () => {
  const signInHandler = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((er) => alert(er.message));
  };

  return (
    <div className={styles.LoginContainer}>
      <div className={styles.LoginInnerContainer}>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign In</h1>
        <p>Slack app</p>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={signInHandler}
        >
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
