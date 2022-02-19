import {BookmarkRepository} from "src/core/domain/bookmark/bookmarkRepository";
import {Bookmark} from "src/core/domain/bookmark/bookmark";

class BookmarkRepositoryImpl implements BookmarkRepository {
    async createBookmark(bookmark: Bookmark): Promise<Bookmark | Error> {
        try {
            const bm: chrome.bookmarks.BookmarkTreeNode = await chrome.bookmarks.create(
                {
                    parentId: bookmark.parentId,
                    title: bookmark.title,
                    url: bookmark.url,
                }
            )
            return new Bookmark(bm.parentId, bm.id, bm.title, bm.url)
        } catch (error) {
            console.log(error)
            return Error(`error while create bookmark: $(error)`)
        }
    }

}

const bookmarkRepositoryImpl = new BookmarkRepositoryImpl()
export default bookmarkRepositoryImpl

