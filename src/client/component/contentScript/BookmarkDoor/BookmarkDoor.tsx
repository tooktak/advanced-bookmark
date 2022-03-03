import React from "react";
import styles from "./BookmarkDoor.module.css";

const BookmarkDoor: React.FC = () => {
  return (
    <div className={styles.BookmarkDoor}>
      <div>
        <span>{`>`}</span>
      </div>
    </div>
  );
};

export default BookmarkDoor;