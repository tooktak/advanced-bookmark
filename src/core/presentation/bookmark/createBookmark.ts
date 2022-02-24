import {Bookmark} from "src/core/domain/bookmark/bookmark";
import {createBookmarkUsecase, listAllBookmarksUsecase} from "src/core/application/bookmark/bookmarkUsecase";


export async function createBookmark(parentId: string | undefined, title: string, url: string | undefined): Promise<Bookmark | Error> {
    return await createBookmarkUsecase(parentId, title, url)
}

export async function listAllBookmarks(): Promise<Bookmark[] | Error>{
    return await listAllBookmarksUsecase()
}