import React from "react";
import { Bookmark } from "src/core/domain/bookmark/bookmark";
import styles from "./BookmarkListItem.module.css"
import { AddIcon, DragIcon } from "src/client/component/Common/Icon";

type BookmarkListItemProps = {
  bookmark: Bookmark;
}

const BookmarkListItem: React.FC<BookmarkListItemProps> = ({ bookmark }) => {
  return (
    <li className={styles.bookmarkListItem}>
      <a href={bookmark.url} title={bookmark.title} target="_parent">
        <div>
          <img src={`http://www.google.com/s2/favicons?domain_url=${bookmark.url}`} />
          <span>{bookmark.title}</span>
        </div>
      </a>
      <span><AddIcon size="18" /></span>
      <span><DragIcon size="18" /></span>
    </li>
  );
};

export default BookmarkListItem;
