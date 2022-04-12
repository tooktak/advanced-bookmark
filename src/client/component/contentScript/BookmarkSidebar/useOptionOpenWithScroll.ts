import { RefObject, useEffect, useRef, useState } from "react";
import { throttle } from "lodash-es";

const useOptionOpenWithScroll = (domRef: RefObject<HTMLElement>, delay: number) => {
  const [optionOpen, setOptionOpen] = useState<boolean>(true);
  const prevScrollY = useRef<number>(0);

  const scrollListener = () => {
    if(domRef.current) {
      const { scrollTop } = domRef.current;

      if(prevScrollY.current < scrollTop && optionOpen) {
        setOptionOpen(false);
      }
      if(prevScrollY.current > scrollTop && !optionOpen) {
        setOptionOpen(true);
      }
      prevScrollY.current = scrollTop;
    }
  }

  const throttleScrollListener = throttle(scrollListener, delay);

  useEffect(() => {
    domRef.current?.addEventListener('scroll', throttleScrollListener);
    return () => domRef.current?.removeEventListener('scroll', throttleScrollListener);
  }, [optionOpen]);

  return optionOpen;
};

export default useOptionOpenWithScroll;
