import {Bookmark} from "src/core/domain/bookmark/bookmark";
import bookmarkRepositoryImpl from "src/core/infra/bookmark/repository/bookmarkRepository";

export async function createBookmarkUsecase(parentID: string | undefined, title: string, url: string | undefined): Promise<Bookmark | Error> {
    const tmpBookmark = new Bookmark(parentID, undefined, title, url)
    return await bookmarkRepositoryImpl.createBookmark(tmpBookmark)
}

export async function listAllBookmarksUsecase(): Promise<Bookmark[] | Error> {
    return await bookmarkRepositoryImpl.listAllBookmarks()
}