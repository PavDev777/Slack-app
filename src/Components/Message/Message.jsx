import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { db } from "../../firebase";

import styles from "./Message.module.scss";

// eslint-disable-next-line react/prop-types
const Message = ({ message, userImage, user, timestamp, id, roomId }) => {
  const deleteMessage = () => {
    db.collection("rooms").doc(roomId).collection("messages").doc(id).delete();
  };

  return (
    <div className={styles.MessageContainer}>
      <div className={styles.Image}>
        <img src={userImage} alt="" />
      </div>

      <div>
        <h4>
          <b>{user}</b>
        </h4>
        <span>{message}</span>
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
      <DeleteOutlineIcon onClick={deleteMessage} />
    </div>
  );
};

export default Message;
