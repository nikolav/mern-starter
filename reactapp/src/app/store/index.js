import { useAppData, ADMIN, TEST } from "./slice-appdata";
import {
  useFlags,
  FLAG_TEST,
  FLAG_APP_IS_PROCESSING,
  FLAG_MENU_OPEN,
} from "./slice-flags";
import { useColorMode } from "../providers/MuiThemeProvider";
import { useColorModeTW, MODE_LIGHT, MODE_DARK } from "./slice-color-mode-tw";
import { useAuthApi } from "../../hooks";
import { useResourceMain } from "../resource";
import { Q__MESSAGES } from "../resource/graphql";
import { useIO } from "../providers/IoProvider";

const API_GRAPHQL_dev = "http://localhost:3001/v1/graphql";
const API_URL_dev = "http://localhost:3001/v1";
const FILE_DOWNLOAD_URL_dev = "http://localhost:3001/v1/download";
const FILE_UPLOAD_URL_dev = "http://localhost:3001/v1/upload";
const IO_dev = "http://localhost:3001/";
const PDF_DOWNLOAD_URI_dev = "http://localhost:3001/v1/download/pdf";

const API_GRAPHQL_production = "http://45.76.85.164:8081/v1/graphql";
const API_URL_production = "http://45.76.85.164:8081/v1";
const FILE_DOWNLOAD_URL_production = "http://45.76.85.164:8081/v1/download";
const FILE_UPLOAD_URL_production = "http://45.76.85.164:8081/v1/upload";
const IO_production = "http://45.76.85.164:8081/";
const PDF_DOWNLOAD_URI_production = "http://45.76.85.164:8081/v1/download/pdf";

// @@DEV
const API_GRAPHQL = API_GRAPHQL_dev;
const API_URL = API_URL_dev;
const AUTH_API_URL = "http://localhost:3001/v1/auth/login";
const AUTH_API_URL_logout = "http://localhost:3001/v1/session";
const AUTH_API_URL_register = "http://localhost:3001/v1/auth/register";
const AUTH_API_URL_session = "http://localhost:3001/v1/session";
const AUTH_API_URL_users = "http://localhost:3001/v1/users";
const FILE_DOWNLOAD_URL = FILE_DOWNLOAD_URL_dev;
const FILE_UPLOAD_URL = FILE_UPLOAD_URL_dev;
const IO_SERVER = IO_dev;
const PDF_DOWNLOAD_URI = PDF_DOWNLOAD_URI_dev;

// @@PRODUCTION
// const API_GRAPHQL = API_GRAPHQL_production;
// const API_URL = API_URL_production;
// const AUTH_API_URL = "http://45.76.85.164:8081/v1/auth/login";
// const AUTH_API_URL_logout = "http://45.76.85.164:8081/v1/session";
// const AUTH_API_URL_register = "http://45.76.85.164:8081/v1/auth/register";
// const AUTH_API_URL_session = "http://45.76.85.164:8081/v1/session";
// const AUTH_API_URL_users = "http://45.76.85.164:8081/v1/users";
// const FILE_DOWNLOAD_URL = FILE_DOWNLOAD_URL_production;
// const FILE_UPLOAD_URL = FILE_UPLOAD_URL_production;
// const IO_SERVER = IO_production;
// const PDF_DOWNLOAD_URI = PDF_DOWNLOAD_URI_production;

const AUTH_SESSION_TOKEN = "drhhmxbdpkf";

const REST_RESOURCE_main = "variables";
const REST_RESOURCE_messages = "messages";

export {
  API_URL,
  API_URL_dev,
  API_URL_production,
  //
  AUTH_API_URL,
  AUTH_API_URL_register,
  AUTH_API_URL_users,
  AUTH_API_URL_logout,
  AUTH_API_URL_session,
  AUTH_SESSION_TOKEN,
  //
  REST_RESOURCE_main,
  REST_RESOURCE_messages,
  //
  API_GRAPHQL,
  API_GRAPHQL_dev,
  API_GRAPHQL_production,
  //
  IO_SERVER,
  IO_dev,
  IO_production,
  //
  useAppData,
  ADMIN,
  TEST,
  //
  useFlags,
  FLAG_TEST,
  FLAG_APP_IS_PROCESSING,
  FLAG_MENU_OPEN,
  //
  useColorMode,
  useColorModeTW,
  MODE_LIGHT,
  MODE_DARK,
  //
  useAuthApi,
  useResourceMain,
  //
  useIO,
  //
  Q__MESSAGES,
  //
  PDF_DOWNLOAD_URI,
  PDF_DOWNLOAD_URI_dev,
  PDF_DOWNLOAD_URI_production,
  FILE_UPLOAD_URL,
  FILE_UPLOAD_URL_dev,
  FILE_UPLOAD_URL_production,
  FILE_DOWNLOAD_URL,
  FILE_DOWNLOAD_URL_dev,
  FILE_DOWNLOAD_URL_production,
};
