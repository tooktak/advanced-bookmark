import React, { createContext, useState } from "react";
import BookmarkSidebar from "./BookmarkSidebar/BookmarkSidebar";
import BookmarkIndicator from "./BookmarkIndicator/BookmarkIndicator";

type BookmarkSidebarOpen = {
  open: boolean;
  handleOpen(): void;
  handleClose(): void;
}

export const BookmarkOpen = createContext<BookmarkSidebarOpen>({} as BookmarkSidebarOpen)

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <BookmarkOpen.Provider value={{open, handleOpen, handleClose}}>
      <BookmarkSidebar />
      <BookmarkIndicator />
    </BookmarkOpen.Provider>
  );
};

export default App;