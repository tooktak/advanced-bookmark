import {createBookmark, listAllBookmarks} from "src/core/presentation/bookmark/createBookmark";
import {Bookmark} from "src/core/domain/bookmark/bookmark";

(async () => {
    const bookmark: Bookmark[] | Error = await listAllBookmarks()
    console.log(bookmark);
    // 북마크 정보 chrome storage 에 저장
    chrome.storage.local.set({bookmark}, function() {
        console.log('Value is set to ' + bookmark);
    });
})();
