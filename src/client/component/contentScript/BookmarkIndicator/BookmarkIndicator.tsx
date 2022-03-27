import React from "react";
import styles from "./BookmarkIndicator.module.css";
import { BookmarkIcon } from "src/client/component/Common/Icon";
import { useBookmarkSidebar } from "src/client/context/UiContext";

const BookmarkIndicator: React.FC = () => {
  const { toggleOpen } = useBookmarkSidebar();

  return (
    <div className={`${styles.bookmarkIndicator}`} onClick={toggleOpen}>
      <BookmarkIcon size="20" />
    </div>
  );
};

export default BookmarkIndicator;