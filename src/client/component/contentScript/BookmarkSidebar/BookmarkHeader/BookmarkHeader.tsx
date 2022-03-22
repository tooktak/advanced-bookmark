import React, { useContext } from "react";
import styles from "./BookmarkHeader.module.css";
import { BookmarkList } from "src/client/component/contentScript/App";
import { SearchIcon, SeeMoreIcon, SortIcon } from "src/client/component/Common/Icon";

const BookmarkHeader: React.FC = () => {
  const { bookmarkList } = useContext(BookmarkList);

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