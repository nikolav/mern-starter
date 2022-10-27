import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxStoreProvider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";

import {
  ApolloGraphqlClientProvider,
  AppEventsProvider,
  AuthApiProvider,
  BrowserContextProvider,
  GravatarsProvider,
  IOProvider,
  MuiThemeProvider,
  QueryProvider,
  ResourceMainProvider,
} from "./app/providers";
import { store } from "./app/store/redux";

import App from "./App";

import "./styles/reset.css";
import "./styles/build.css";
import "./global.scss";
import "./index.css";
import "@fancyapps/ui/dist/fancybox.css";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

const APPROOT = "lgytlqbycau";
ReactDOM.createRoot(document.getElementById(APPROOT)).render(
  <BrowserContextProvider>
    <AppEventsProvider>
      <QueryProvider>
        <AuthApiProvider>
          <IOProvider>
            <BrowserRouter>
              <ReduxStoreProvider store={store}>
                <ApolloGraphqlClientProvider>
                  <ResourceMainProvider>
                    <GravatarsProvider>
                      <MuiThemeProvider>
                        <CssBaseline />
                        <App />
                      </MuiThemeProvider>
                    </GravatarsProvider>
                  </ResourceMainProvider>
                </ApolloGraphqlClientProvider>
              </ReduxStoreProvider>
            </BrowserRouter>
          </IOProvider>
        </AuthApiProvider>
      </QueryProvider>
    </AppEventsProvider>
  </BrowserContextProvider>
);
