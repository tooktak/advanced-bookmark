import {Bookmark} from "src/core/domain/bookmark/bookmark";

export interface BookmarkRepository {
    createBookmark(bookmark: Bookmark): Promise<Bookmark | Error>;
    listAllBookmarks(): Promise<Bookmark[] | Error>
}

