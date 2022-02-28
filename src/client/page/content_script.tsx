import React from "react";
import ReactDOM from "react-dom";
import BookmarkList from "src/client/component/BookmarkList";
import "../style/reset.css";
import "../style/content_script.css";

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
    document.getElementById("advanced-bookmark-root")
  );
};

const init = () => {
  const $body = document.querySelector("body");

  if ($body) {
    const $extensionRoot = document.createElement("div");
    $extensionRoot.setAttribute("id", "advanced-bookmark-root");
    $body.insertAdjacentElement("beforeend", $extensionRoot);
    render();
  }
};

init();
