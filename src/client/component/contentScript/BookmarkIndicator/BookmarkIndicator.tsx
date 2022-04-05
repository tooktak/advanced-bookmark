import React, { useContext } from "react";
import styles from "./BookmarkIndicator.module.css";
import { BookmarkSidebarOpen } from "src/client/component/contentScript/App";

const BookmarkIndicator: React.FC = () => {
  const { sidebarOpen } = useContext(BookmarkSidebarOpen);

  return (
    <div className={`${styles.bookmarkIndicator}`} onClick={sidebarOpen}>
      <span>{`>`}</span>
    </div>
  );
};

export default BookmarkIndicator;