import React, { useEffect, useState } from "react";
import { Bookmark } from "src/core/domain/bookmark/bookmark";

interface BookmarkListItemProps {
  bookmark: Bookmark;
}

const BookmarkListItem: React.FC<BookmarkListItemProps> = ({ bookmark }) => {
  useEffect(() => {
    console.log(bookmark);
  }, [bookmark]);

  return (
    <li>
      <span>{bookmark.parentId}</span>
      <span>{bookmark.id} / </span>
      <span>{bookmark.title} / </span>
      <p>{bookmark.url}</p>
    </li>
  );
};

export default BookmarkListItem;
