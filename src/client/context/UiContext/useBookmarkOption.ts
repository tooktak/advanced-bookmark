import { useContext } from "react";
import { BookmarkOptionContext } from "src/client/context/UiContext/BookmarkOption";

const useBookmarkSidebar = () => {
  const state = useContext(BookmarkOptionContext);
  if (!state) throw new Error('Cannot find Provider');
  return state;
}

export default useBookmarkSidebar;

