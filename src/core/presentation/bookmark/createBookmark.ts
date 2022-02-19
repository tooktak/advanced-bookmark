import {Bookmark} from "src/core/domain/bookmark/bookmark";
import {createBookmarkUsecase} from "src/core/application/bookmark/createBookmark";


export async function createBookmark(parentID: string | undefined, title: string, url: string | undefined): Promise<Bookmark | Error>{
    return createBookmarkUsecase(parentID, title, url)
}