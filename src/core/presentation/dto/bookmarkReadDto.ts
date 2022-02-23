import {Bookmark} from "src/core/domain/bookmark/bookmark";

export class BookmarkReadDto {
  private _parentId?: string;
  private _id: string;
  private _title: string;
  private _url?: string;

  constructor(parentID: string | undefined, id: string, title: string, url: string | undefined) {
    this._parentId = parentID
    this._id = id;
    this._title = title;
    this._url = url;
  }

  get parentId(): string | undefined {
    return this._parentId;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get url(): string | undefined{
    return this._url;
  }

  static fromEntity(bookmark : Bookmark) : BookmarkReadDto | undefined{
    if (typeof bookmark.id === "undefined")
      return undefined;
    return new BookmarkReadDto(bookmark.parentId, bookmark.id, bookmark.title, bookmark.url);
  }

}