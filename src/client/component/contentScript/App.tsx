import React from "react";
import styles from "./App.module.css";
import BookmarkSidebar from "./BookmarkSidebar/BookmarkSidebar";
import BookmarkIndicator from "./BookmarkIndicator/BookmarkIndicator";
import { ContextProvider } from "src/client/context";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <div className={styles.advancedBookmark}>
        <BookmarkSidebar />
        <BookmarkIndicator />
      </div>
    </ContextProvider>
  );
};

export default App;