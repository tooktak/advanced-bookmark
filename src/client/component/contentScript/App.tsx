import React, { createContext, useEffect, useState } from "react";
import BookmarkSidebar from "./BookmarkSidebar/BookmarkSidebar";
import BookmarkIndicator from "./BookmarkIndicator/BookmarkIndicator";

type Bookmark = {
  _parentId: string | undefined;
  _id: string | undefined;
  _title: string;
  _url: string | undefined;
}

type BookmarkListType = {
  bookmarkList: Bookmark[];
  getBookmarkList(): void;
}

type BookmarkSidebarOpen = {
  open: boolean;
  sidebarOpen(): void;
  sidebarClose(): void;
}

export const BookmarkOpen = createContext<BookmarkSidebarOpen>({} as BookmarkSidebarOpen)
export const BookmarkList = createContext<BookmarkListType>({} as BookmarkListType)

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [bookmarkList, setBookmarkList] = useState<Bookmark[]>([]);

  const getBookmarkList = () => {
    // 북마크에 저장된 데이터 chrome storage 에서 불러오기
    chrome.storage.local.get(['bookmark'], (result) => {
      // storage 에서 불러온 데이터는 Object 형`태 => Bookmark 로 변환
      const res = result.bookmark.filter((e: Bookmark) => e._url);
      setBookmarkList(res);
    });
  }

  const sidebarOpen = () => {
    setOpen(true);
  }

  const sidebarClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    getBookmarkList();
  }, [])

  return (
    <BookmarkOpen.Provider value={{open, handleOpen, handleClose}}>
      <BookmarkList.Provider value={{bookmarkList, getBookmarkList}}>
        <BookmarkSidebar />
        <BookmarkIndicator />
      </BookmarkList.Provider>
    </BookmarkOpen.Provider>
  );
};

export default App;