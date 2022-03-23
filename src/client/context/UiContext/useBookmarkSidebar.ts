import { useContext } from "react";
import { BookmarkSidebarContext } from "src/client/context/UiContext/BookmarkSidebar";

const useBookmarkSidebar = () => {
  const state = useContext(BookmarkSidebarContext);
  if (!state) throw new Error('Cannot find Provider');
  return state;
}

export default useBookmarkSidebar;