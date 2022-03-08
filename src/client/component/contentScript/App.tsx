import React, { createContext, useState } from "react";
import Bookmark from "./Bookmark/Bookmark";
import BookmarkIndicator from "./BookmarkIndicator/BookmarkIndicator";

type BookmarkOpen = {
  open: boolean;
  handleOpen(): void;
  handleClose(): void;
}

export const BookmarkOpen = createContext<BookmarkOpen>({} as BookmarkOpen)

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
      <Bookmark />
      <BookmarkIndicator />
    </BookmarkOpen.Provider>
  );
};

export default App;