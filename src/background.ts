import {createBookmark, listAllBookmarks} from "src/core/presentation/bookmark/createBookmark";
import {Bookmark} from "src/core/domain/bookmark/bookmark";

(async () => {
    const bookmark: Bookmark[] | Error = await listAllBookmarks()
    console.log(bookmark)
})();