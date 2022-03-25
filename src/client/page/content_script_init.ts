import styles from "./content_script_init.module.css";

class ContentScript {
  private readonly $body = document.querySelector("body");
  private readonly $head = document.querySelector("head");

  getBookmarkIcon() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.01V20.9748C6 20.9839 6.01106 20.9883 6.01727 20.9817L11.9927 14.6548C11.9967 14.6506 12.0033 14.6506 12.0073 14.6548L17.9827 20.9817C17.9889 20.9883 18 20.9839 18 20.9748V3.01C18 3.00448 17.9955 3 17.99 3H6.01C6.00448 3 6 3.00448 6 3.01Z" stroke="currentColor" stroke-width="2"/>
</svg>`;
  }

  insertIndicator($iframe: HTMLIFrameElement) {
    const $indicator = document.createElement("div");
    $indicator.classList.add(styles.bookmarkIndicator);
    $indicator.innerHTML = this.getBookmarkIcon();
    $iframe.insertAdjacentElement("afterend", $indicator);
  }

  insertIframeTag() {
    if (this.$body) {
      const $iframe = document.createElement("iframe");
      // $iframe.setAttribute("id", styles.advancedBookmarkRoot);
      $iframe.setAttribute("src", chrome.runtime.getURL("../content_script.html"));
      $iframe.setAttribute("aria-hidden", "true");
      $iframe.setAttribute("data-theme", "default");
      this.$body.insertAdjacentElement("beforeend", $iframe);
      this.insertIndicator($iframe);
    }
  }

  insertCssStyle() {
    if (this.$head) {
      const $style = document.createElement("style");
      this.$head.insertAdjacentElement("beforeend", $style);
    }
  }

  render() {
    this.insertIframeTag()
    this.insertCssStyle()
  }

  init() {
    this.render();
  }
}

window.addEventListener("load", () => {
  const app = new ContentScript();
  app.init();
})
