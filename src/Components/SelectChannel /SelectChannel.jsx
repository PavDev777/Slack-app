import React from "react";
import styles from "./SelectChannel.module.scss";

const SelectChannel = () => {
  return (
    <div className={styles.SelectChannelContainer}>
      <h3>Please, change or adding channel</h3>
      <div className={styles.Image}>
        <img
          src="https://pushapp.ru/blog/wp-content/uploads/2019/07/new-illustration-style-exploration.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SelectChannel;
