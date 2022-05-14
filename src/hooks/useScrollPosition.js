// libraries:
import { useRef, useLayoutEffect } from "react";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//= =============================================================================

const isBrowser = typeof window !== "undefined";

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  if (useWindow) {
    return {
      x: window.scrollX,
      y: window.scrollY,
    };
  }
  return {
    x: position.left,
    y: position.top,
  };
}

export default function useScrollPosition(
  effect,
  dependencies,
  element,
  useWindow,
  wait
) {
  const position = useRef(
    getScrollPosition({
      useWindow,
    })
  );

  const throttleTimeout = useRef(null);

  // -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

  function callBack() {
    const currentPosition = getScrollPosition({ element, useWindow });
    effect({
      prevPos: position.current,
      currentPosition,
    });
    position.current = currentPosition;
    throttleTimeout.current = null;
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, dependencies);
}
