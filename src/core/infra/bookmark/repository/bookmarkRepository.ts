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
            return new Error(`error while create bookmark: $(error)`)
        }
    }

    async listAllBookmarks(): Promise<Bookmark[] | Error> {
        try {
            const bookmarks: chrome.bookmarks.BookmarkTreeNode[] = await chrome.bookmarks.search({})
            const domainBookmarks: Bookmark[] = new Array(bookmarks.length)
            console.log(bookmarks)
            for (const bookmark of bookmarks) {
                console.log(bookmark)
                domainBookmarks.push(new Bookmark(bookmark.parentId, bookmark.id, bookmark.title, bookmark.url))
            }
            return domainBookmarks
        } catch (error) {
            return new Error(`error while lista all bookmark: $(error)`)
        }
    }
}

const bookmarkRepositoryImpl = new BookmarkRepositoryImpl()
export default bookmarkRepositoryImpl

