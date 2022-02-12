import {Bookmark} from "src/core/domain/bookmark/bookmark";

export interface BookmarkRepository {
    createBookmark(parentID: string, title: string, url: string): Bookmark | null;
}

