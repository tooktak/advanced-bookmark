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

type OrderBy = "ASC" | "DESC";

type BookmarkOption = {
  orderBy: OrderBy;
  showFolder: boolean;
  open: boolean;
  handleOrderBy(): void;
  handleShowFolder(): void;
  handleOpen(): void;
  handleClose(): void;
}

export const Store = {
  BookmarkOption: createContext<BookmarkOption>({} as BookmarkOption)
}

export const BookmarkOpen = createContext<BookmarkSidebarOpen>({} as BookmarkSidebarOpen)
export const BookmarkList = createContext<BookmarkListType>({} as BookmarkListType)


const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showFolder, setShowFolder] = useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<OrderBy>("ASC");
  const [optionOpen, setOptionOpen] = useState<boolean>(true);

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

  const handleOptionOpen = () => {
    setOptionOpen(true)
  }

  const handleOptionClose = () => {
    setOptionOpen(false)
  }

  const handleShowFolder = () => {
    setShowFolder(!showFolder);
  }

  const handleOrderBy = () => {
    if(orderBy === "ASC") {
      setOrderBy("DESC");
    } else {
      setOrderBy("ASC");
    }
  }

  return (
    <BookmarkOpen.Provider value={{open, handleOpen, handleClose}}>
      <Store.BookmarkOption.Provider value={{open: optionOpen, showFolder, orderBy, handleOpen: handleOptionOpen, handleClose: handleOptionClose, handleShowFolder, handleOrderBy}}>
        <BookmarkSidebar />
        <BookmarkIndicator />
      </Store.BookmarkOption.Provider>
    </BookmarkOpen.Provider>
  );
};

export default App;