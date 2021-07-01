import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import SidebarOption from "../SidebarOption/SidebarOption";
import styles from "./Sedebar.module.scss";
import { db } from "../../firebase";
import { userInfo } from "../../features/appSlice";

const Sidebar = () => {
  const [channels, loading] = useCollection(db.collection("rooms"));
  const { userName } = useSelector(userInfo);

  return (
    <div className={styles.SidebarContainer}>
      <div className={styles.SidebarHeader}>
        <div className={styles.SidebarInfo}>
          <h2> {userName && userName} </h2>
          <h3>
            <FiberManualRecordIcon style={{ width: "16px", color: "green" }} />
          </h3>
        </div>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={FileCopyIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & User Groups " />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={ExpandLessIcon} title="File Browser" />
      <SidebarOption Icon={ExpandMoreIcon} title="Show Less" />
      <hr />
      <SidebarOption Icon={AppsIcon} title="Show Less" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add channel" addChannelOption />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {channels?.docs.map((doc) => {
            return (
              <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Sidebar;
