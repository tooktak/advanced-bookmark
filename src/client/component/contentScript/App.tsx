import React, { createContext, useState } from "react";
import BookmarkSidebar from "./BookmarkSidebar/BookmarkSidebar";
import BookmarkIndicator from "./BookmarkIndicator/BookmarkIndicator";

type BookmarkSidebarOpen = {
  open: boolean;
  handleOpen(): void;
  handleClose(): void;
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


const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showFolder, setShowFolder] = useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<OrderBy>("ASC");
  const [optionOpen, setOptionOpen] = useState<boolean>(true);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
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