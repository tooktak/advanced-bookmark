import React from "react";
import ReactDOM from "react-dom";
import BookmarkList from "src/client/component/BookmarkList";
import { Bookmark } from "src/core/domain/bookmark/bookmark";
import { listAllBookmarks } from "src/core/presentation/bookmark/createBookmark";

const ContentScript = () => {
  return (
    <BookmarkList />
  );
};

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ContentScript />
    </React.StrictMode>,
    document.getElementById("extension_react_root")
  );
};

const init = () => {
  const $body = document.querySelector("body");

  if ($body) {
    const $extensionRoot = document.createElement("div");
    $extensionRoot.setAttribute("id", "extension_react_root");
    $body.insertAdjacentElement("beforeend", $extensionRoot);
    render();
  }
};

init();
