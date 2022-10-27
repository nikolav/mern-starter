import { useState, useEffect } from "react";
import { useBrowser } from "./use-browser";
import { assign, addClass, hasClass, removeClass } from "../util";

const OVERFLOW_HIDDEN_CLASS = "overflow-hidden";
//
const useBodyOverflow = () => {
  const [overflowHidden, setOverflowHidden] = useState();
  const { document } = useBrowser();
  const body = document?.body;
  //
  // @init
  useEffect(() => {
    body && setOverflowHidden(hasClass(body, OVERFLOW_HIDDEN_CLASS));
  }, []);
  //
  // @update
  useEffect(() => {
    if (body) {
      if (overflowHidden) {
        addClass(body, OVERFLOW_HIDDEN_CLASS);
        return;
      }
      //
      removeClass(body, OVERFLOW_HIDDEN_CLASS);
    }
  }, [body, overflowHidden]);
  //
  return assign(() => overflowHidden, {
    hidden: (isHidden) => setOverflowHidden(true === isHidden),
  });
};

//
export default useBodyOverflow;
