import {Bookmark} from "src/core/domain/bookmark/bookmark";
import bookmarkRepositoryImpl from "src/core/infra/bookmark/repository/bookmarkRepository";

export function createBookmark(parentID: string | undefined, title: string, url: string | undefined): Bookmark | null {
    return bookmarkRepositoryImpl.createBookmark(parentID, title, "http://www.naver.com")
}
