import React, { createContext, useState } from "react";

type Context = {
  open: boolean;
  toggleOpen(): void;
}

export const BookmarkOptionContext = createContext<Context>({} as Context);

const BookmarkOption: React.FC = ({children}) => {
  const [open, setOpen] = useState<boolean>(true);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <BookmarkOptionContext.Provider value={{open, toggleOpen}}>
      {children}
    </BookmarkOptionContext.Provider>
  );
};

export default BookmarkOption;

