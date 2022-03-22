import React, { useContext } from "react";
import styles from "./BookmarkIndicator.module.css";
import { BookmarkIcon } from "src/client/component/Common/Icon";
import { BookmarkSidebarOpen } from "src/client/component/contentScript/App";

const BookmarkIndicator: React.FC = () => {
  const { sidebarOpen } = useContext(BookmarkSidebarOpen);

  return (
    <div className={`${styles.bookmarkIndicator}`} onClick={sidebarOpen}>
      <BookmarkIcon size="20" />
    </div>
  );
};

export default BookmarkIndicator;