import styles from "./contentScript.module.css";

class ContentScript {
  private readonly $body = document.querySelector("body");
  private $content = document.createElement("iframe");
  private $indicator = document.createElement("div");

  getBookmarkIcon() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.01V20.9748C6 20.9839 6.01106 20.9883 6.01727 20.9817L11.9927 14.6548C11.9967 14.6506 12.0033 14.6506 12.0073 14.6548L17.9827 20.9817C17.9889 20.9883 18 20.9839 18 20.9748V3.01C18 3.00448 17.9955 3 17.99 3H6.01C6.00448 3 6 3.00448 6 3.01Z" stroke="currentColor" stroke-width="2"/>
</svg>`;
  }

  sidebarOpen() {
    this.$indicator.addEventListener("click", () => {
      this.$content.classList.add(styles.contentScriptOpen);
      this.$content.contentWindow?.postMessage({ type: 'ADVANCED_SIDEBAR_OPEN' }, '*');
    });
  }

  sidebarClose() {
    window.addEventListener('message', (e) => {
      if(e.data.type === "ADVANCED_SIDEBAR_CLOSE") {
        this.$content.classList.remove(styles.contentScriptOpen);
      }
    });
  }

  setContentDOM($iframe: HTMLIFrameElement) {
    $iframe.setAttribute("src", chrome.runtime.getURL("../advanced_sidebar.html"));
    $iframe.setAttribute("aria-hidden", "true");
    $iframe.setAttribute("data-theme", "default");
    $iframe.classList.add(styles.contentScript);
  }

  setIndicatorDOM($indicator: HTMLDivElement) {
    $indicator.classList.add(styles.bookmarkIndicator);
    $indicator.innerHTML = this.getBookmarkIcon();
  }

  insertIndicator($iframe: HTMLIFrameElement) {
    $iframe.insertAdjacentElement("afterend", this.$indicator);
  }

  insertIframeContent() {
    if (this.$body) {
      this.$body.insertAdjacentElement("beforeend", this.$content);
      this.insertIndicator(this.$content);
    }
  }

  initDOM() {
    this.setContentDOM(this.$content);
    this.setIndicatorDOM(this.$indicator);
  }

  render() {
    this.insertIframeContent();
  }

  initEventListener () {
    this.sidebarOpen();
    this.sidebarClose();
  }

  init() {
    this.initDOM();
    this.render();
    this.initEventListener();
  }
}

window.addEventListener("load", () => {
  const app = new ContentScript();
  app.init();
})
