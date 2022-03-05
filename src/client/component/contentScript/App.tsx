import React from "react";
import Bookmark from "src/client/component/contentScript/Bookmark/Bookmark";
import BookmarkDoor from "src/client/component/contentScript/BookmarkDoor/BookmarkDoor";

const App: React.FC = () => {
  return (
    <>
      <Bookmark />
      <BookmarkDoor />
    </>
  );
};

export default App;