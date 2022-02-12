export class Bookmark {
    private _parentID?: string;
    private _id: string;
    private _title: string;
    private _url?: string;

    constructor(parentID: string | undefined, id: string, title: string, url: string | undefined) {
        this._parentID = parentID
        this._id = id;
        this._title = title;
        this._url = url;
    }

    get parentID(): string | undefined {
        return this._parentID;
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

}