import { useEffect, useState } from "react";
// import {
//   //   // BoxResizeLeft,
//   //   // BoxResizeRight,
//   //   // BoxResizeTop,
//   //   // Spotlight,
//   // TabsIndicator,
// } from "../../../components";
import {
  useApolloMessages,
  useAuthApi,
  useFileDownload,
  useForm,
  useGravatar,
  useSavePdf,
  useUploadFiles,
} from "../../../hooks";
import { useResourceMain, useIO } from "../../store";

const GIT_LINK = "https://github.com/nikolav";

export default function PageHome() {
  const auth = useAuthApi();
  const gravatar = useGravatar();
  const { resource: variables } = useResourceMain();
  const { error, processing, user, session, authenticate, register, logout } =
    auth;
  const { resource: messages } = useApolloMessages();
  const socket = useIO();
  useEffect(() => {
    if (socket) {
      socket.on("status:test", (payload) => console.log({ payload }));
    }
    return () => socket?.off("status:test");
  }, [socket]);

  const { upload, error: uploadError, loading, files } = useUploadFiles();
  const [file1$, setf1] = useState();
  const isNotEmpty = (value) => 0 < Object(value).length;
  const { handle, sync, values } = useForm(
    {
      //
      foo1: isNotEmpty,
      foo2: isNotEmpty,
      //
      "file1.title": isNotEmpty,
      "file1.description": isNotEmpty,
    },
    {
      onSubmit: (d) => upload({ ...d, file1: [file1$, file1$.name] }),
    }
  );

  const {
    error: downloadError,
    loading: downloadProgress,
    download,
  } = useFileDownload();
  const { error: pdfError, loading: pdfLoading, savePdf } = useSavePdf();

  return (
    <section className="text-center">
      <button
        className="button"
        onClick={() =>
          savePdf({
            template: "test-doc",
            locals: { title: "title --1", description: "desc. --1" },
          })
        }
      >
        save pdf
      </button>
      <button className="button" onClick={() => download("frquom")}>
        download
      </button>
      <div>
        <pre>{JSON.stringify({ pdfError, pdfLoading }, null, 2)}</pre>
      </div>
      <div>
        <pre>
          {JSON.stringify({ downloadError, downloadProgress }, null, 2)}
        </pre>
      </div>
      <div>
        <pre>{JSON.stringify({ uploadError, loading, files }, null, 2)}</pre>
      </div>
      <div>
        <form noValidate onSubmit={handle}>
          <div>
            <input
              type="text"
              name="foo1"
              value={values.foo1}
              onChange={sync}
            />
          </div>
          <div>
            <input
              type="text"
              name="foo2"
              value={values.foo2}
              onChange={sync}
            />
          </div>
          {/* @file */}
          <div>
            <input
              type="file"
              name="file1"
              onChange={(e) => setf1(e.target.files[0])}
            />
            <div>
              <input
                type="text"
                name="file1.title"
                value={values["file1.title"]}
                onChange={sync}
              />
            </div>
            <div>
              <input
                type="text"
                name="file1.description"
                value={values["file1.description"]}
                onChange={sync}
              />
            </div>
          </div>
          <div>
            <button type="submit">ok</button>
          </div>
        </form>
      </div>

      <div className="mt-12">
        <p className="flex justify-center gap-20">
          <a
            className="link text-indigo-500"
            rel="norefferer noopener"
            target="_blank"
            href={GIT_LINK}
          >
            code@github
          </a>
          <a
            className="link text-indigo-500"
            rel="norefferer noopener"
            target="_blank"
            href="https://nikolav.rs/"
          >
            admin
          </a>
        </p>
      </div>
      <div>
        <div>
          <button
            className="button"
            onClick={() =>
              authenticate({ email: "admin@nikolav.rs", password: "122333" })
            }
          >
            login
          </button>
          <button
            className="button"
            onClick={() => {
              const t = Date.now();
              register({
                name: `user--${t}`,
                email: `mail--${t}@nikolav.rs`,
                password: `122333`,
              });
            }}
          >
            register
          </button>
          <button className="button" onClick={logout}>
            logout
          </button>
          <button
            className="button"
            onClick={() => socket.emit("status:test", Date.now())}
          >
            io
          </button>
        </div>
        <div>
          <button onClick={() => gravatar.enable(!gravatar.enabled())}>
            enable
          </button>
          <button onClick={() => gravatar.generate()}>generate</button>
        </div>
        {gravatar() && <img src={gravatar()} alt="gravatar" />}
        <pre>
          {JSON.stringify({ error, processing, user, session }, null, 2)}
        </pre>
      </div>
      <div>
        <pre>{JSON.stringify({ variables }, null, 2)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify({ messages }, null, 2)}</pre>
      </div>
    </section>
  );
}
