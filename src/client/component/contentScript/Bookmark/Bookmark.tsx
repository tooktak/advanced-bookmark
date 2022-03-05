import React from "react";
import styles from "./Bookmark.module.css";
import BookmarkHeader from "./BookmarkHeader/BookmarkHeader";
import BookmarkList from "./BookmarkList/BookmarkList";
import BookmarkOption from "./BookmarkOption/BookmarkOption";

const Bookmark: React.FC = () => {
  return (
    <aside className={styles.bookmark}>
      <BookmarkHeader />
      <BookmarkOption />
      <BookmarkList />
    </aside>
  );
};

export default Bookmark;