import React, { createContext, useState } from "react";
import styles from "./App.module.css";
import BookmarkSidebar from "./BookmarkSidebar/BookmarkSidebar";
import BookmarkIndicator from "./BookmarkIndicator/BookmarkIndicator";

type BookmarkSidebarOpenState = {
  open: boolean;
  sidebarOpen(): void;
  sidebarClose(): void;
}

export const BookmarkSidebarOpen = createContext<BookmarkSidebarOpenState>({} as BookmarkSidebarOpenState)

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const sidebarOpen = () => {
    setOpen(true);
  }

  const sidebarClose = () => {
    setOpen(false);
  }

  return (
    <div className={styles.advancedBookmark}>
      <BookmarkSidebarOpen.Provider value={{open, sidebarOpen, sidebarClose}}>
        <BookmarkSidebar />
        <BookmarkIndicator />
      </BookmarkSidebarOpen.Provider>
    </div>
  );
};

export default App;