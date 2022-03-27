import React from "react";
import styles from "./BookmarkSidebar.module.css";
import BookmarkHeader from "./BookmarkHeader/BookmarkHeader";
import BookmarkList from "./BookmarkList/BookmarkList";
import BookmarkOption from "./BookmarkOption/BookmarkOption";
import Background from "src/client/component/Common/Background/Background"
import { useBookmarkSidebar } from "src/client/context/UiContext";

const BookmarkSidebar: React.FC = () => {
  const { open, toggleOpen} = useBookmarkSidebar();

  return (
    <>
      <aside className={`${styles.bookmarkSidebar} ${open ? styles.open : ''}`}>
        <BookmarkHeader />
        <BookmarkOption />
        <div className={`${styles.listScroll}`}>
          <BookmarkList />
        </div>
      </aside>
      <Background open={open} handleClose={toggleOpen} />
    </>
  );
};

export default BookmarkSidebar;