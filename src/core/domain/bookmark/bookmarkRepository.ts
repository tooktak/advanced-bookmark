import {Bookmark} from "src/core/domain/bookmark/bookmark";

export interface BookmarkRepository {
    createBookmark(parentID: string | undefined, title: string, url: string | undefined): Promise<Bookmark | Error>;
}

