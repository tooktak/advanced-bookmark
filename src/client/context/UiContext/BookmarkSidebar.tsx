import React, { createContext, useEffect, useState } from "react";

type Context = {
  open: boolean;
  handleSidebarClose(): void;
}

export const BookmarkSidebarContext = createContext<Context>({} as Context);

const BookmarkSidebar: React.FC = ({children}) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleSidebarOpen = (e: MessageEvent) => {
    if(e.data.type === "ADVANCED_SIDEBAR_OPEN") {
      setOpen(true);
    }
  }

  const handleSidebarClose = () => {
    window.parent.postMessage({ type: 'ADVANCED_SIDEBAR_CLOSE' }, '*');
    setOpen(false);
  }

  useEffect(() => {
    window.addEventListener('message', handleSidebarOpen);

    return () => {
      window.removeEventListener('message', handleSidebarOpen);
    }
  })

  return (
    <BookmarkSidebarContext.Provider value={{open, handleSidebarClose}}>
      {children}
    </BookmarkSidebarContext.Provider>
  );
};

export default BookmarkSidebar;

