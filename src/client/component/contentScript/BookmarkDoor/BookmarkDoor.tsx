import React, { useContext, useState } from "react";
import styles from "./BookmarkDoor.module.css";
import { BookmarkContext } from "src/client/component/contentScript/App";

const BookmarkDoor: React.FC = () => {
  const { handleOpen } = useContext(BookmarkContext);

  return (
    <div className={`${styles.BookmarkDoor}`} onClick={handleOpen}>
      <span>{`>`}</span>
    </div>
  );
};

export default BookmarkDoor;