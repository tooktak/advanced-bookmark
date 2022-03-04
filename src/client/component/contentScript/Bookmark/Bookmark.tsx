import React, { useContext } from "react";
import styles from "./Bookmark.module.css";
import BookmarkHeader from "./BookmarkHeader/BookmarkHeader";
import BookmarkList from "./BookmarkList/BookmarkList";
import BookmarkOption from "./BookmarkOption/BookmarkOption";
import Background from "src/client/component/Common/Background/Background"
import { BookmarkContext } from "src/client/component/contentScript/App";

const Bookmark: React.FC = () => {
  const { open } = useContext(BookmarkContext);

  return (
    <>
      <aside className={`${styles.bookmark} ${open ? styles.open : ''}`}>
        <BookmarkHeader />
        <BookmarkOption />
        <BookmarkList />
      </aside>
      {open && <Background />}
    </>
  );
};

export default Bookmark;