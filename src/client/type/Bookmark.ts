type Bookmark = {
  _parentId?: string;
  _id?: string;
  _title: string;
  _url?: string;
}

type BookmarkWithFolder = Bookmark & {
  _bookmark: Bookmark[];
}
