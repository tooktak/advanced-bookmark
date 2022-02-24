import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {Readability, isProbablyReaderable} from "@mozilla/readability";

// for article extraction test
// https://github.com/mozilla/readability
if (isProbablyReaderable(document)) {
  console.log("readable page");
  const article = new Readability(document).parse();

  console.log("title : " + article?.title);             //article title
  console.log("content : " + article?.content);         //HTML string of processed article content
  console.log("textContent : " + article?.textContent); //text content of the article, with all the HTML tags removed
  console.log("length : " + article?.length);           //length of an article, in characters
  console.log("excerpt : " + article?.excerpt);         //article description, or short excerpt from the content
  console.log("byline : " + article?.byline);           //author metadata
  console.log("dir : " + article?.dir);                 //content direction
  console.log("siteName : " + article?.siteName);       //name of the site
}
else{
  console.log("unreadable page");
  console.log("title : " + document.title);
}

const ContentScript = () => {
  const [color, setColor] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [like, setLike] = useState<boolean>(false);

  useEffect(() => {
    console.log(chrome);
    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    chrome.storage.sync.get(
      {
        favoriteColor: "red",
        likesColor: true
      },
      (items) => {
        setColor(items.favoriteColor);
        setLike(items.likesColor);
      }
    );
  }, []);

  const saveOptions = () => {
    // Saves options to chrome.storage.sync.
    chrome.storage.sync.set(
      {
        favoriteColor: color,
        likesColor: like
      },
      () => {
        // Update status to let user know options were saved.
        setStatus("Options saved.");
        const id = setTimeout(() => {
          setStatus("");
        }, 1000);
        return () => clearTimeout(id);
      }
    );
  };

  return (
    <>
      <div>
        Favorite color: <select
        value={color}
        onChange={(event) => setColor(event.target.value)}
      >
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={like}
            onChange={(event) => setLike(event.target.checked)}
          />
          I like colors.
        </label>
      </div>
      <div>{status}</div>
      <button onClick={saveOptions}>Save</button>
    </>
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