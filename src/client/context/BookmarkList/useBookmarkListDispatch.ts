import { useContext } from "react";
import { BookmarkListDispatch } from "src/client/context/BookmarkList/index";

const useBookmarkListDispatch = () => {
  const dispatch = useContext(BookmarkListDispatch);
  if (!dispatch) throw new Error('Cannot find Provider');
  return dispatch;
}

export default useBookmarkListDispatch;
