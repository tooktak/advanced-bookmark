import React from "react";
import styles from './BookmarkOption.module.css';
import Checkbox from "src/client/component/Common/Checkbox/Checkbox";
import { ArrowIcon } from "src/client/component/Common/Icon";
import { useBookmarkOption } from "src/client/context/UiContext";
import { useBookmarkListState, useBookmarkListDispatch } from "src/client/context/BookmarkList";

const BookmarkOption: React.FC = () => {
  const { open } = useBookmarkOption()
  const { isFolder, orderBy } = useBookmarkListState();
  const dispatch = useBookmarkListDispatch();

  const toggleFolder = () => dispatch({ type: 'TOGGLE_FOLDER' });
  const toggleOrderBy = () => dispatch({ type: "TOGGLE_ORDER_BY" });

  return (
    <div className={`${styles.bookmarkOption} ${open ? styles.open : ''}`}>
      <a className={orderBy === "ASC" ? styles.asc : styles.desc} onClick={toggleOrderBy}>
        <ArrowIcon size="18" />
        <span>정렬</span>
      </a>
      <Checkbox
        checked={isFolder}
        onClick={toggleFolder}
        id="showFolder"
        text="폴더 보기"
      />
    </div>
  );
};

export default BookmarkOption;