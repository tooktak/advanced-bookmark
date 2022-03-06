import React, { createContext, useState } from "react";
import Bookmark from "./Bookmark/Bookmark";
import BookmarkDoor from "./BookmarkDoor/BookmarkDoor";

export const BookmarkContext = createContext<any>({})

const App: React.FC = () => {
  const [bookmarkOpen, setBookmarkOpen] = useState(false);

  const handleOpen = () => {
    setBookmarkOpen(true);
  }

  const handleClose = () => {
    setBookmarkOpen(false);
  }

  return (
    <BookmarkContext.Provider value={{open: bookmarkOpen, handleOpen, handleClose}}>
      <Bookmark />
      <BookmarkDoor />
    </BookmarkContext.Provider>
  );
};

export default App;