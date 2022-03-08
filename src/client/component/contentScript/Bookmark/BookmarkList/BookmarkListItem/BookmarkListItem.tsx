import React, { useEffect } from "react";
import { Bookmark } from "src/core/domain/bookmark/bookmark";
import styles from "./BookmarkListItem.module.css"

type BookmarkListItemProps = {
  bookmark: Bookmark;
}

const BookmarkAdd: React.FC = () => {
  return (<span>+</span>)
}
const BookmarkDrag: React.FC = () => {
  return (<span>=</span>)
}

const BookmarkListItem: React.FC<BookmarkListItemProps> = ({ bookmark }) => {
  useEffect(() => {
    console.log(bookmark);
  }, [bookmark]);

  return (
    <li className={styles.bookmarkListItem}>
      <a href={bookmark.url} title={bookmark.title} target="_parent">
        <span>{bookmark.title}</span>
        <BookmarkAdd />
        <BookmarkDrag />
      </a>
    </li>
  );
};

export default BookmarkListItem;
