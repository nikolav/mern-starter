import { useEffect } from "react";
import { ref, set } from "firebase/database";
import { assign, md5 } from "../util";
import { useGravatars } from "../app/providers/GravatarsProvider";
import { useAuthApi } from "./use-auth-api";
import { firebase } from "../app/services";
//
const { dbRealtime: db } = firebase;
//
// https://www.gravatar.com/avatar/6621adb9b4f1ee95b68259a2553ac3ab?d=robohash&size=92
// d=monsterid|wavatar|robohash
//
export const DEFAULT_GRAVATAR_SIZE = 64;
//
export const GRAVATAR_BASEURL = "https://www.gravatar.com/avatar";
//
export default function useGravatar(size = DEFAULT_GRAVATAR_SIZE) {
  const { user } = useAuthApi();
  const gravatarsDB = useGravatars();
  //
  const UID = user?.id;
  const gravatar = gravatarsDB[UID];
  const refGID = ref(db, `gravatar/${UID}`);
  //
  const generateDefaultGravatar_ = () =>
    UID &&
    set(refGID, {
      enabled: false,
      src: null,
    });
  const enabled_ = () => true === gravatar?.enabled;
  //
  useEffect(() => {
    if (UID && !gravatar) {
      generateDefaultGravatar_();
    }
  }, []);
  //
  return assign(() => (enabled_() ? gravatar?.src : null), {
    db: gravatarsDB,
    enabled: enabled_,
    enable: (enabled = true) =>
      UID &&
      set(refGID, {
        ...(true === enabled && !gravatar?.src
          ? { src: generateGravatar_(size) }
          : gravatar),
        enabled,
      }),
    generate: () =>
      UID &&
      set(refGID, {
        ...gravatar,
        src: generateGravatar_(size),
      }),
  });
}

function generateGravatar_(size) {
  return `${GRAVATAR_BASEURL}/${md5(emailRand_())}?d=${
    ["monsterid", "wavatar", "robohash"][Math.floor(Math.random() * 3)]
  }&size=${parseInt(size, 10)}`;
}
function emailRand_() {
  return `g${Date.now()}@gravatar.com`;
}
