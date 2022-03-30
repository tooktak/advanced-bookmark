import React from "react";
import "../style/reset.css";
import BookmarkSidebar from "./BookmarkSidebar/BookmarkSidebar";
import { ContextProvider } from "src/client/context";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <BookmarkSidebar />
    </ContextProvider>
  );
};

export default App;