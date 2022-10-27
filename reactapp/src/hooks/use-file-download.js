import { useEffect, useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

import { useAuthApi } from "./use-auth-api";
import { FILE_DOWNLOAD_URL } from "../app/store";
import { stripEndSlashes, unpackBlob } from "../util";

const useFileDownload = () => {
  const { user } = useAuthApi();
  const [f$, setf] = useState();
  const [error$, setError] = useState();
  const [loading$, setLoading] = useState();

  const AT = user?.accessToken;
  const isAuth = null != AT;
  const statusDownloadStart = () => {
    setError(null);
    setLoading(true);
  };

  useEffect(() => {
    if (isAuth && f$?.fileID) {
      (async () => {
        await download_(f$);
      })();
    }
  }, [isAuth, f$]);

  return {
    error: error$,
    loading: loading$,
    download: (fileID, filename) =>
      setf({ fileID, filename, _key: Date.now() }),
  };

  async function download_({ fileID, filename }) {
    return new Promise(async (resolve, _reject) => {
      let file = null;
      if (isAuth) {
        try {
          statusDownloadStart();
          const { data: blob } = await axios({
            method: "get",
            url: `${stripEndSlashes(FILE_DOWNLOAD_URL)}/${encodeURI(fileID)}`,
            headers: {
              Authorization: `Bearer ${AT}`,
            },
            responseType: "arraybuffer",
          });

          if (!blob) throw `bad request`;

          const [filenameDd, file$] = await unpackBlob(blob);
          file = await saveAs(file$, filename || filenameDd);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }

      resolve(file);
    });
  }
};

export default useFileDownload;
