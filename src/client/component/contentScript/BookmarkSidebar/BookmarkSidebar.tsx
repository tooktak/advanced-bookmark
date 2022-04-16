import React from "react";
import styles from "./BookmarkSidebar.module.css";
import BookmarkHeader from "./BookmarkHeader/BookmarkHeader";
import BookmarkList from "./BookmarkList/BookmarkList";
import BookmarkOption from "./BookmarkOption/BookmarkOption";
import Background from "src/client/component/Common/Background/Background"
import { useBookmarkSidebar } from "src/client/context/UiContext";

const BookmarkSidebar: React.FC = () => {
  const { open, handleSidebarClose } = useBookmarkSidebar();

  console.log('sidebar');

  return (
    <>
      <Background open={open} handleClose={handleSidebarClose} />
      <aside className={styles.bookmarkSidebar}>
        <BookmarkHeader />
        <BookmarkOption />
        <BookmarkList />
      </aside>
      <div className={styles.background} onClick={handleSidebarClose} />
    </>
  );
};

export default BookmarkSidebar;