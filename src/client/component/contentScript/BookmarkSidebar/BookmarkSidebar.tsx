import React, { UIEvent, useState } from "react";
import styles from "./BookmarkSidebar.module.css";
import BookmarkHeader from "./BookmarkHeader/BookmarkHeader";
import BookmarkList from "./BookmarkList/BookmarkList";
import BookmarkOption from "./BookmarkOption/BookmarkOption";
import Background from "src/client/component/Common/Background/Background"
import { useBookmarkSidebar } from "src/client/context/UiContext";

type Scroll = {
  prev: number;
  option: boolean;
}

const BookmarkSidebar: React.FC = () => {
  const [scroll, setScroll] = useState<Scroll>({
    prev: 0,
    option: true
  });
  const { open, handleSidebarClose } = useBookmarkSidebar();

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.currentTarget;
    const { prev } = scroll;
    scrollTop > prev ? (
      setScroll({ prev: scrollTop, option: false })
    ) : (
      setScroll({ prev: scrollTop, option: true })
    )
  }

  return (
    <>
      <Background open={open} handleClose={handleSidebarClose} />
      <aside className={styles.bookmarkSidebar}>
        <BookmarkHeader />
        <BookmarkOption option={scroll.option} />
        <div onScroll={handleScroll} className={styles.listScroll}>
          <BookmarkList />
        </div>
      </aside>
      <div className={styles.background} onClick={handleSidebarClose} />
    </>
  );
};

export default BookmarkSidebar;