import React, { useContext } from "react";
import styles from "./BookmarkIndicator.module.css";
import { BookmarkOpen } from "src/client/component/contentScript/App";

const BookmarkIndicator: React.FC = () => {
  const { handleOpen } = useContext(BookmarkOpen);

  return (
    <div className={`${styles.bookmarkIndicator}`} onClick={handleOpen}>
      <span>{`>`}</span>
    </div>
  );
};

export default BookmarkIndicator;