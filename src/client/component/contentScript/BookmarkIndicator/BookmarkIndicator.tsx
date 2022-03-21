import React, { useContext } from "react";
import styles from "./BookmarkIndicator.module.css";
import { BookmarkIcon } from "src/client/component/Common/Icon";
import { BookmarkOpen } from "src/client/component/contentScript/App";

const BookmarkIndicator: React.FC = () => {
  const { handleOpen } = useContext(BookmarkOpen);

  return (
    <div className={`${styles.bookmarkIndicator}`} onClick={handleOpen}>
      <BookmarkIcon size="20" />
    </div>
  );
};

export default BookmarkIndicator;