import {Bookmark} from "src/core/domain/bookmark/bookmark";

export interface ContentTokenListExtractor {
    extractContentTokenList(url: string): Promise<string[] | Error>;
}

