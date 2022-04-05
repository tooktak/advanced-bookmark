import React from "react";
import { Bookmark } from "src/core/domain/bookmark/bookmark";
import styles from "./BookmarkListItem.module.css"
import { AddIcon, DragIcon } from "src/client/component/Common/Icon";

type BookmarkListItemProps = {
  bookmark: Bookmark;
}

const BookmarkListItem: React.FC<BookmarkListItemProps> = ({ bookmark }) => {
  const url = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${bookmark.url}&size=16`;

  return (
    <li className={styles.bookmarkListItem}>
      <a href={bookmark.url} title={bookmark.title} target="_blank">
        <div>
          <img src={url} alt={bookmark.title} />
          <span>{bookmark.title}</span>
        </div>
      </a>
      <span><AddIcon size="18" /></span>
      <span><DragIcon size="18" /></span>
    </li>
  );
};

export default BookmarkListItem;
