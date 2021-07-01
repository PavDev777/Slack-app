/* eslint-disable react/self-closing-comp */
import React from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import styles from "./Chat.module.scss";
import ChatInput from "../ChatInput/ChatInput";
import { db } from "../../firebase";
import Message from "../Message/Message";
import SelectChannel from "../SelectChannel /SelectChannel";

const Chat = () => {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  return (
    <div className={styles.ChatContainer}>
      {!roomDetails && !roomMessages && <SelectChannel />}
      {roomDetails && roomMessages && (
        <>
          <div className={styles.Header}>
            <div className={styles.HeaderLeft}>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </div>
            <div className={styles.HeaderRight}>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </div>
          </div>
          <div className={styles.ChatMessages}>
            {roomMessages?.docs.map((doc) => {
              const { message, userImage, user, timestamp } = doc.data();
              return (
                <Message
                  key={doc.id}
                  id={doc.id}
                  roomId={roomId}
                  message={message}
                  userImage={userImage}
                  user={user}
                  timestamp={timestamp}
                />
              );
            })}
          </div>
          <ChatInput
            channelId={roomId}
            channelName={roomDetails?.data().name}
          />
        </>
      )}
    </div>
  );
};
export default Chat;
