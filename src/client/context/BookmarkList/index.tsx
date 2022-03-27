import React, { createContext, Dispatch, useEffect, useReducer, useState } from "react";
import useBookmarkListData from './useBookmarkListData';
import useBookmarkListState from './useBookmarkListState';
import useBookmarkListDispatch from './useBookmarkListDispatch';

type OrderBy = "ASC" | "DESC";
type Index = Bookmark[] | BookmarkWithFolder[];
type State = {
  orderBy: OrderBy,
  isFolder: boolean,
  sortBy: string,
  search: string
};
type Action = { type: "TOGGLE_ORDER_BY" } | { type: "TOGGLE_FOLDER" };
type BookmarkListDispatch = Dispatch<Action>;

export const BookmarkListData = createContext<Index | null>(null);
export const BookmarkListState = createContext<State | null>(null);
export const BookmarkListDispatch = createContext<BookmarkListDispatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'TOGGLE_FOLDER':
      return {
        ...state,
        isFolder: !state.isFolder
      }
    case 'TOGGLE_ORDER_BY':
      return state.orderBy === 'ASC'
        ? { ...state, orderBy: 'DESC' }
        : { ...state, orderBy: 'ASC' };
    default:
      throw new Error('non-existent type');
  }
}

const BookmarkList: React.FC = ({ children}) => {
  const [bookmarkList, setBookmarkList] = useState<Index>([]);
  const [state, dispatch] = useReducer(reducer, {
    isFolder: false,
    orderBy: 'DESC',
    sortBy: '정렬 방법은 고민중',
    search: ''
  });

  const getBookmarkList = () => {
    // 북마크에 저장된 데이터 chrome storage 에서 불러오기
    chrome.storage.local.get(['bookmark'], (result) => {
      // storage 에서 불러온 데이터는 Object 형`태 => Bookmark 로 변환
      const res = result.bookmark.filter((e: Bookmark) => e._url);
      setBookmarkList(res);
    });
  }

  useEffect(() => {
    if(!state.isFolder) {
      getBookmarkList();
    }
  }, [state])

  return (
    <BookmarkListData.Provider value={bookmarkList}>
      <BookmarkListState.Provider value={state}>
        <BookmarkListDispatch.Provider value={dispatch}>
          {children}
        </BookmarkListDispatch.Provider>
      </BookmarkListState.Provider>
    </BookmarkListData.Provider>
  );
};

export default BookmarkList;
export { useBookmarkListData, useBookmarkListState, useBookmarkListDispatch };