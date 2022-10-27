import { useState, useEffect } from "react";
import axios from "axios";

import { FILE_UPLOAD_URL } from "../app/store";
import { useAuthApi } from "./use-auth-api";
import { forOwn, isArray } from "../util";

const useUploadFiles = () => {
  const { user } = useAuthApi();
  // cache form data to upload
  const [data$, setData] = useState(null);
  const [files$, setFiles] = useState(null);
  const [loading$, setLoading] = useState(null);
  const [error$, setError] = useState(null);

  const isAuth = null != user?.accessToken;
  const statusUploadStart = () => {
    setFiles(null);
    setError(null);
    setLoading(true);
  };
  const blankState = () => {
    setError(null);
    setFiles(null);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuth && data$) {
      (async () => {
        try {
          statusUploadStart();
          // merge input to FormData
          const formData = new FormData();
          forOwn(data$, (value, field) => {
            if (isArray(value)) {
              // for file fields, spread
              // value: [File{}, file.name]
              formData.append(field, ...value);
            } else {
              formData.append(field, value);
            }
          });
          //
          const uploadedFiles = await upload_(formData);
          setFiles(uploadedFiles);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [data$, isAuth]);

  useEffect(() => {
    if (!isAuth) blankState();
  }, [isAuth]);

  return {
    files: files$,
    error: error$,
    loading: loading$,
    upload: setData,
  };

  async function upload_(formData) {
    return new Promise(async (resolve, reject) => {
      const AT = user?.accessToken;
      if (AT) {
        try {
          const { data: files } = await axios({
            method: "post",
            url: FILE_UPLOAD_URL,
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${AT}`,
            },
          });
          if (!files) throw `bad request`;

          resolve(files);
        } catch (error) {
          reject(error);
        }
      }
    });
  }
};

export default useUploadFiles;

// const { upload } = useUploadFiles()
// const uploadedFiles =
//   await upload({
//
//     "foo": "bar",
//       ..fields
//
//     "file1": ["File{}", "filename"],
//     "file1.title": "title --1",
//     "file1.description": "description --1",
//       ..files
//   });
