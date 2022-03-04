import React, { useContext } from "react";
import styles from "./Background.module.css";
import { BookmarkContext } from "src/client/component/contentScript/App";

const Background: React.FC = () => {
  const { handleClose } = useContext(BookmarkContext);

  return (
    <div
      className={styles.background}
      onClick={handleClose}
    />
  );
};

export default Background;