import React, { createContext, RefObject, useEffect, useRef, useState } from "react";
import { throttle } from "lodash-es";

type Context = {
  optionOpen: boolean;
  listAreaRef: RefObject<HTMLDivElement>;
}

export const BookmarkOptionContext = createContext<Context>({} as Context);

const BookmarkOption: React.FC = ({children}) => {
  const [optionOpen, setOptionOpen] = useState<boolean>(true);
  const listAreaRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef<number>(0);

  const scrollListener = () => {
    if(listAreaRef.current) {
      const { scrollTop } = listAreaRef.current;

      if(prevScrollY.current < scrollTop && optionOpen) {
        setOptionOpen(false);
      }
      if(prevScrollY.current > scrollTop && !optionOpen) {
        setOptionOpen(true);
      }
      prevScrollY.current = scrollTop;
    }
  }

  const throttleScrollListener = throttle(scrollListener, 200);

  useEffect(() => {
    listAreaRef.current?.addEventListener('scroll', throttleScrollListener);
    return () => listAreaRef.current?.removeEventListener('scroll', throttleScrollListener);
  }, [optionOpen]);

  return (
    <BookmarkOptionContext.Provider value={{optionOpen, listAreaRef}}>
      {children}
    </BookmarkOptionContext.Provider>
  );
};

export default BookmarkOption;

