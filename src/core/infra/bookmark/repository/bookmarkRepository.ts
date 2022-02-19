import {BookmarkRepository} from "src/core/domain/bookmark/bookmarkRepository";
import {Bookmark} from "src/core/domain/bookmark/bookmark";

class BookmarkRepositoryImpl implements BookmarkRepository {
    async createBookmark(parentID: string | undefined, title: string, url: string | undefined): Promise<Bookmark | Error> {
        try {
            const bookmark: chrome.bookmarks.BookmarkTreeNode = await chrome.bookmarks.create(
                {
                    parentId: parentID,
                    title: title,
                    url: url,
                }
            )
            return new Bookmark(bookmark.parentId, bookmark.id, bookmark.title, bookmark.url)
        } catch (error) {
            console.log(error)
            return Error(`error while create bookmark: $(error)`)
        }
    }

}

const bookmarkRepositoryImpl = new BookmarkRepositoryImpl()
export default bookmarkRepositoryImpl

