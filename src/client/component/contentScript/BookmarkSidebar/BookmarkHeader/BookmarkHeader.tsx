import React from "react";
import styles from "./BookmarkHeader.module.css";
import { SearchIcon, SeeMoreIcon, SortIcon } from "src/client/component/Common/Icon";
import { useBookmarkListData } from "src/client/context/BookmarkList";

const BookmarkHeader: React.FC = () => {
  const bookmarkList = useBookmarkListData();

  return (
    <div className={styles.bookmarkHeader}>
      <h1>{bookmarkList.length}<small>북마크</small></h1>
      <a>
        <SearchIcon />
      </a>
      <a>
        <SortIcon />
      </a>
      <a>
        <SeeMoreIcon />
      </a>
    </div>
  );
};

export default BookmarkHeader;