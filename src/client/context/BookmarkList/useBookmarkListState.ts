import { useContext } from "react";
import { BookmarkListState } from "src/client/context/BookmarkList/index";

const useBookmarkListState = () => {
  const state = useContext(BookmarkListState);
  if (!state) throw new Error('Cannot find Provider');
  return state;
}

export default useBookmarkListState;
