import React, { useEffect, useState } from "react";
import BookmarkListItem from "./BookmarkListItem";
import { bookmarkItems } from "src/client/component/bookmarkItems";
import { Bookmark } from "src/core/domain/bookmark/bookmark";

const BookmarkList: React.FC = () => {
  const [testList] = useState<Bookmark[] | Error>([...bookmarkItems]);
  const [bookmarkList, setBookmarkList] = useState<Bookmark[] | Error>([]);

  const init = () => {
    // 북마크에 저장된 데이터 chrome storage 에서 불러오기
    chrome.storage.local.get(['bookmark'], (result) => {
      // storage 에서 불러온 데이터는 Object 형태 => Bookmark 로 변환
      const res = result.bookmark.map((e: { _parentId: string | undefined; _id: string | undefined; _title: string; _url: string | undefined; }) => new Bookmark(e._parentId, e._id, e._title, e._url));
      console.log(res);
      setBookmarkList(res);
    });
  }

  useEffect(() => {
    console.log(bookmarkList);
  }, [bookmarkList]);

  return (
    <ul>
      {testList instanceof Error || testList.map((bookmark) =>
        (<BookmarkListItem key={bookmark.title} bookmark={bookmark} />)
      )}
      <button onClick={init}>출력</button>
      {bookmarkList instanceof Error || bookmarkList.map((bookmark, idx) =>
        (<BookmarkListItem key={`${idx}-${bookmark.id}-${bookmark.title}`} bookmark={bookmark} />)
      )}
    </ul>
  );
};

export default BookmarkList;