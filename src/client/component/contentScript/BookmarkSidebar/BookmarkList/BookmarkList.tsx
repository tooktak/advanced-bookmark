import React, { useEffect, useState } from "react";
import { Bookmark } from "src/core/domain/bookmark/bookmark";
import BookmarkListItem from "./BookmarkListItem/BookmarkListItem";
import styles from "./BookmarkList.module.css"

const BookmarkList: React.FC = () => {
  const [bookmarkList, setBookmarkList] = useState<Bookmark[] | Error>([]);

  const init = () => {
    // 북마크에 저장된 데이터 chrome storage 에서 불러오기
    chrome.storage.local.get(['bookmark'], (result) => {
      // storage 에서 불러온 데이터는 Object 형`태 => Bookmark 로 변환
      const res = result.bookmark.map((e: { _parentId: string | undefined; _id: string | undefined; _title: string; _url: string | undefined; }) => new Bookmark(e._parentId, e._id, e._title, e._url));
      setBookmarkList(res);
    });
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <ul className={styles.bookmarkList}>
      {bookmarkList instanceof Error ||
        bookmarkList
          .filter((bookmark) => bookmark.url)
          .map((bookmark, idx) =>
        (<BookmarkListItem key={`${idx}-${bookmark.id}-${bookmark.title}`} bookmark={bookmark} />)
      )}
    </ul>
  );
};

export default BookmarkList;