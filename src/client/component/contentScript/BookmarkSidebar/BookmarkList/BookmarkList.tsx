import React from "react";
import styles from "./BookmarkList.module.css"
import BookmarkListItem from "./BookmarkListItem/BookmarkListItem";
import { useBookmarkListData } from "src/client/context/BookmarkList";
import { useBookmarkOption } from "src/client/context/UiContext";

const BookmarkList: React.FC = () => {
  const bookmarkList = useBookmarkListData();
  const { listAreaRef } = useBookmarkOption();

  return (
    <div ref={listAreaRef} className={styles.listScroll}>
      <ul className={styles.bookmarkList}>
        {bookmarkList instanceof Error ||
          bookmarkList
            .filter((bookmark) => bookmark._url)
            .map((bookmark, idx) =>
          (<BookmarkListItem key={`${idx}-${bookmark._id}-${bookmark._title}`} bookmark={bookmark} />)
        )}
      </ul>
    </div>
  );
};

export default BookmarkList;