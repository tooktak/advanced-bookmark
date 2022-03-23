import React from "react";
import styles from "./BookmarkListItem.module.css"
import { AddIcon, DragIcon } from "src/client/component/Common/Icon";

type BookmarkListItemProps = {
  bookmark: Bookmark;
}

const BookmarkListItem: React.FC<BookmarkListItemProps> = ({ bookmark }) => {
  const url = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${bookmark._url}&size=16`;

  return (
    <li className={styles.bookmarkListItem}>
      <a href={bookmark._url} title={bookmark._title} target="_blank">
        <div>
          <img src={url} alt={bookmark._title} />
          <span>{bookmark._title}</span>
        </div>
      </a>
      <span><AddIcon size="18" /></span>
      <span><DragIcon size="18" /></span>
    </li>
  );
};

export default BookmarkListItem;
