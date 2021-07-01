import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useSelector } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import styles from "./Header.module.scss";
import { userInfo } from "../../features/appSlice";
import { auth } from "../../firebase";

const Header = () => {
  const { userPhoto } = useSelector(userInfo);

  const logOut = () => {
    auth.signOut();
  };

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderLeft}>
        <Avatar className={styles.Avatar} src={userPhoto && userPhoto} />
        <ExitToAppIcon className={styles.Exit} onClick={logOut} />
        <AccessTimeIcon className={styles.TimeIcon} />
      </div>
      <div className={styles.HeaderSearch}>
        <SearchIcon className={styles.IconSearching} />
        <input className={styles.Search} type="text" placeholder="Search" />
      </div>
      <div className={styles.HeaderRight}>
        <HelpOutlineIcon className={styles.HelpIcon} />
      </div>
    </div>
  );
};

export default Header;
