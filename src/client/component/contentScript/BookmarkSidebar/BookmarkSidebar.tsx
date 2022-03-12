import React, { useContext } from "react";
import styles from "./Bookmark.module.css";
import BookmarkHeader from "./BookmarkHeader/BookmarkHeader";
import BookmarkList from "./BookmarkList/BookmarkList";
import BookmarkOption from "./BookmarkOption/BookmarkOption";
import Background from "src/client/component/Common/Background/Background"
import { BookmarkOpen } from "src/client/component/contentScript/App";

const BookmarkSidebar: React.FC = () => {
  const { open, handleClose } = useContext(BookmarkOpen);

  return (
    <>
      <aside className={`${styles.bookmarkSidebar} ${open ? styles.open : ''}`}>
        <BookmarkHeader />
        <BookmarkOption />
        <BookmarkList />
      </aside>
      <Background open={open} handleClose={handleClose} />
    </>
  );
};

export default BookmarkSidebar;