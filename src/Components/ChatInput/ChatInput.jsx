/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import firebase from "firebase";
import styles from "./ChatInput.module.scss";
import { db } from "../../firebase";
import { userInfo } from "../../features/appSlice";

const ChatInput = ({ channelId, channelName = "Yoo" }) => {
  const [input, setInput] = useState("");
  const { userName, userPhoto } = useSelector(userInfo);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId || !input) {
      return;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: userName,
      userImage: userPhoto,
    });
    setInput("");
  };

  return (
    <div className={styles.ChatInputContainer}>
      <form>
        <TextField
          id="outlined-basic"
          label={`Input your message #${channelName}`}
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          style={{ background: "#0b2d41", color: "white" }}
          onClick={sendMessage}
        >
          Send
        </Button>
      </form>
    </div>
  );
};
export default ChatInput;
