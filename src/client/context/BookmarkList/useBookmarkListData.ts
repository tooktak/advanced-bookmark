import { useContext } from "react";
import { BookmarkListData } from "src/client/context/BookmarkList/index";

const useBookmarkListData = () => {
  const data = useContext(BookmarkListData);
  if (!data) throw new Error('Cannot find Provider');
  return data;
}

export default useBookmarkListData;