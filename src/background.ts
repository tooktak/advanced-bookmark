import {createBookmark} from "src/core/presentation/bookmark/createBookmark";
import {Bookmark} from "src/core/domain/bookmark/bookmark";

(async () => {
    const bookmark: Bookmark | Error = await createBookmark(undefined, "naver", "www.naver.com")
    if (bookmark instanceof  Error) {
        console.log(bookmark)
    }
})()
