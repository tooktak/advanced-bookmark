import {Bookmark} from "src/core/domain/bookmark/bookmark";
import {listAllBookmarks} from "src/core/presentation/bookmark/createBookmark";

export interface BookmarkRepository {
    createBookmark(bookmark: Bookmark): Promise<Bookmark | Error>;
    listAllBookmarks(): Promise<Bookmark[] | Error>
}

