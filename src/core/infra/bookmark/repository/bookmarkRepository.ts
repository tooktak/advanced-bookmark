import {Bookmark} from "src/core/domain/bookmark/bookmark"

class BookmarkRepositoryImpl {
    public async createBookmark(parentID: string | undefined, title: string, url: string | undefined): Bookmark | null {
        const tmp = chrome.bookmarks.create(
            {
                parentId: parentID,
                title: title,
                url: url,
            }
        )
        tmp.then().then().then().then().then().then().then().then().then()
    }

}

const bookmarkRepositoryImpl = new BookmarkRepositoryImpl()
export default bookmarkRepositoryImpl

