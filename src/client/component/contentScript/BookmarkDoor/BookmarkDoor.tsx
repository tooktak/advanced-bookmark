import React, { useContext } from "react";
import styles from "./BookmarkDoor.module.css";
import { BookmarkContext } from "src/client/component/contentScript/App";

const BookmarkDoor: React.FC = () => {
  const { open, handleOpen } = useContext(BookmarkContext);

  return (
    <div className={`${styles.BookmarkDoor} ${open ? styles.close : ''}`} onClick={handleOpen}>
      <span>{`>`}</span>
    </div>
  );
};

export default BookmarkDoor;