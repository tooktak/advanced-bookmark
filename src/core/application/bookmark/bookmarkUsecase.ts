import {Bookmark} from "src/core/domain/bookmark/bookmark";
import bookmarkRepositoryImpl from "src/core/infra/repository/bookmark/bookmarkRepository";

export async function createBookmarkUsecase(parentId: string | undefined, title: string, url: string | undefined): Promise<Bookmark | Error> {
    const tmpBookmark = new Bookmark(parentId, undefined, title, url)
    return await bookmarkRepositoryImpl.createBookmark(tmpBookmark)
}

export async function listAllBookmarksUsecase(): Promise<Bookmark[] | Error> {
    return await bookmarkRepositoryImpl.listAllBookmarks()
}