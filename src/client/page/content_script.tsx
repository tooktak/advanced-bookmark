import React from "react";
import ReactDOM from "react-dom";
import App from "src/client/component/contentScript/App";
import styles from "./content_script.module.css";

class ContentScript {
  private readonly $body = document.querySelector("body");

  render() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById(styles.advancedBookmarkRoot)
    );
  }

  init() {
    if (this.$body) {
      const $appRoot = document.createElement("div");
      $appRoot.setAttribute("id", styles.advancedBookmarkRoot);
      $appRoot.setAttribute("class", styles.advancedBookmarkRoot);
      this.$body.insertAdjacentElement("beforeend", $appRoot);
      this.render();
    }
  }
}

window.addEventListener("load", () => {
  const app = new ContentScript();
  app.init();
})
