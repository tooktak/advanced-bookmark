import React, { createContext, useState } from "react";

type Context = {
  open: boolean;
  toggleOpen(): void;
}

export const BookmarkSidebarContext = createContext<Context>({} as Context);

const BookmarkSidebar: React.FC = ({children}) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <BookmarkSidebarContext.Provider value={{open, toggleOpen}}>
      {children}
    </BookmarkSidebarContext.Provider>
  );
};

export default BookmarkSidebar;

