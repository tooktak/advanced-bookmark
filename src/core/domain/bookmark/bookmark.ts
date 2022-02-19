export class Bookmark {
    private _parentId?: string;
    private _id?: string;
    private _title: string;
    private _url?: string;

    constructor(parentID: string | undefined, id: string | undefined, title: string, url: string | undefined) {
        this._parentId = parentID
        this._id = id;
        this._title = title;
        this._url = url;
    }

    get parentId(): string | undefined {
        return this._parentId;
    }

    get id(): string | undefined {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get url(): string | undefined{
        return this._url;
    }

}