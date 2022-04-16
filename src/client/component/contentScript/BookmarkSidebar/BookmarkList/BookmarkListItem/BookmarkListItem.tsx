import React, { useEffect, useState } from "react";
import styles from "./BookmarkListItem.module.css"
import { AddIcon, DragIcon } from "src/client/component/Common/Icon";

type BookmarkListItemProps = {
  bookmark: Bookmark;
}

const getFaviconUrl = (url: string | undefined) => `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=16`;


const BookmarkListItem: React.FC<BookmarkListItemProps> = ({ bookmark }) => {
  const [favicon, setFavicon] = useState<string | undefined>();

  const setValidFaviconUrl = (url: string | undefined) => {
    const faviconUrl = getFaviconUrl(url);
    fetch(faviconUrl)
      .then((data) => data.ok ? setFavicon(data.url) : '');
  }

  useEffect(() => {
    setValidFaviconUrl(bookmark._url);
  }, [])

  return (
    <li className={styles.bookmarkListItem}>
      <a href={bookmark._url} title={bookmark._title} target="_blank">
        <div>
          <img src={favicon} />
          <span>{bookmark._title}</span>
        </div>
      </a>
      <span><AddIcon size="18" /></span>
      <span><DragIcon size="18" /></span>
    </li>
  );
};

export default BookmarkListItem;
