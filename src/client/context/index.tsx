import CombineProvider from "src/client/context/CombineProvider";
import UiContext from "src/client/context/UiContext";
import BookmarkList from "src/client/context/BookmarkList";
import BookmarkSidebar from "src/client/context/UiContext/BookmarkSidebar";

const providers = [
  ...UiContext,
  BookmarkList,
  BookmarkSidebar
]

export const ContextProvider = CombineProvider(...providers);
