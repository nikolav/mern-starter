import { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { saveAs } from "file-saver";
import { PDF_DOWNLOAD_URI } from "../app/store";
import { merge, stripEndSlashes } from "../util";

const CONFIG = {
  http: {
    headers: {},
  },
  defaultPdfTemplate: "test-doc",
  defaultPdfFilename: "out.pdf",
};

const useSavePdf = () => {
  const [loading$, setLoading] = useState();
  const [error$, setError] = useState();
  const [pdf$, setPdf] = useState();
  const fetchStart_ = () => {
    setError(null);
    setLoading(true);
  };

  const save_ = ({
    locals = {},
    template = CONFIG.defaultPdfTemplate,
    filename = CONFIG.defaultPdfFilename,
    config = {},
  }) =>
    new Promise(async (resolve, _reject) => {
      let file = null;
      try {
        fetchStart_();
        const options = merge({}, CONFIG, config);

        const { data: bufferPdf } = await axios({
          method: "post",
          url: `${stripEndSlashes(PDF_DOWNLOAD_URI)}/${template}`,
          responseType: "arraybuffer",
          data: qs.stringify(locals),
          headers: options.http?.headers,
        });

        file = await saveAs(new Blob([bufferPdf]), filename, {
          type: "application/pdf",
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }

      resolve(file);
    });

  useEffect(() => {
    if (pdf$) save_(pdf$);
  }, [pdf$]);

  return {
    error: error$,
    loading: loading$,
    savePdf: (pdf$) => setPdf({ ...pdf$, _key: Date.now() }),
  };
  //
};

export default useSavePdf;
