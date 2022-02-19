import {Bookmark} from "src/core/domain/bookmark/bookmark";
import bookmarkRepositoryImpl from "src/core/infra/bookmark/repository/bookmarkRepository";

export async function createBookmarkUsecase(parentID: string | undefined, title: string, url: string | undefined): Promise<Bookmark | Error> {
    const bookmark: Bookmark | Error = await bookmarkRepositoryImpl.createBookmark(parentID, title, url)
    return bookmark
}
