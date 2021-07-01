import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { auth } from "./firebase";
import styles from "./App.module.scss";
import Login from "./Components/Login/Login";
import Chat from "./Components/Chat/Chat";
import { getUserInfo } from "./features/appSlice";
import Loader from "./Components/Loader/Loader";

function App() {
  const [user, loading] = useAuthState(auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      const objUser = {
        userName: user.displayName,
        userPhoto: user.photoURL,
      };
      dispatch(getUserInfo(objUser));
    }
  }, [user]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className={styles.AppBody}>
            <Sidebar />
            <Chat />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
