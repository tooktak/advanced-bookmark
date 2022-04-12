import React, { useRef } from "react";
import styles from "./BookmarkSidebar.module.css";
import BookmarkHeader from "./BookmarkHeader/BookmarkHeader";
import BookmarkList from "./BookmarkList/BookmarkList";
import BookmarkOption from "./BookmarkOption/BookmarkOption";
import Background from "src/client/component/Common/Background/Background"
import { useBookmarkSidebar } from "src/client/context/UiContext";
import useOptionOpenWithScroll from "src/client/component/contentScript/BookmarkSidebar/useOptionOpenWithScroll";

const BookmarkSidebar: React.FC = () => {
  const { open, handleSidebarClose } = useBookmarkSidebar();
  const bookmarkListRef = useRef<HTMLDivElement>(null);
  const optionOpen = useOptionOpenWithScroll(bookmarkListRef, 200);

  return (
    <>
      <Background open={open} handleClose={handleSidebarClose} />
      <aside className={styles.bookmarkSidebar}>
        <BookmarkHeader />
        <BookmarkOption option={optionOpen} />
        <div ref={bookmarkListRef} className={styles.listScroll}>
          <BookmarkList />
        </div>
      </aside>
      <div className={styles.background} onClick={handleSidebarClose} />
    </>
  );
};

export default BookmarkSidebar;