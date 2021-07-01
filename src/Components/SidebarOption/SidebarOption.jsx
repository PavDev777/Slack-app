/* eslint-disable */
import React from "react";
import styles from "./SidebarOption.module.scss";
import TextureIcon from "@material-ui/icons/Texture";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { enterRoom } from "../../features/appSlice";
import classNames from "classnames";
import { selectRoomId } from "../../features/appSlice";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const roomId = useSelector(selectRoomId);
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  const stylesBg = classNames(styles.SidebarOptionContainer, {
    [styles.active]: id === roomId,
  });

  return (
    <div
      onClick={addChannelOption ? addChannel : selectChannel}
      className={stylesBg}
    >
      {Icon ? (
        <>
          <Icon fontSize="small" />
          <h3> {title} </h3>
        </>
      ) : (
        <>
          <TextureIcon fontSize="small" />
          <h3>{title}</h3>
        </>
      )}
    </div>
  );
};

export default SidebarOption;
