import React, { useContext } from "react";
import styles from './BookmarkOption.module.css';
import Checkbox from "src/client/component/Common/Checkbox/Checkbox";
import { ArrowIcon } from "src/client/component/Common/Icon";
import { Store } from "src/client/component/contentScript/App";

const BookmarkOption: React.FC = () => {
  const { open, showFolder, orderBy, handleShowFolder, handleOrderBy } = useContext(Store.BookmarkOption);



  return (
    <div className={`${styles.bookmarkOption} ${open ? styles.open : ''}`}>
      <a className={orderBy === "ASC" ? styles.asc : styles.desc} onClick={handleOrderBy}>
        <ArrowIcon size="18" />
        <span>정렬</span>
      </a>
      <Checkbox
        checked={showFolder}
        onClick={handleShowFolder}
        id="showFolder"
        text="폴더 보기"
      />
    </div>
  );
};

export default BookmarkOption;