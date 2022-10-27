import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import axios from "axios";
import httpStatus from "http-status";

const API = "http://localhost:3001/api/status";
const API_error = "http://localhost:3001/api/error";

// setup test server
const worker = setupServer(
  rest.get(API, (req, res, ctx) =>
    res(ctx.status(httpStatus.OK), ctx.json({ status: "ok" }))
  ),

  rest.get(API_error, (req, res, ctx) =>
    res(ctx.status(httpStatus.BAD_REQUEST))
  ),

  // fail-safe; schedule last
  rest.all("*", (req, res, ctx) =>
    res(
      ctx.status(httpStatus.INTERNAL_SERVER_ERROR),
      ctx.json({ message: `undefined handler for [${req.url.toString()}]` })
    )
  )
);

beforeAll(() => worker.listen());
afterAll(() => worker.close());
afterEach(() => worker.resetHandlers());

describe("@msw-test", () => {
  it("@success", async () => {
    const { data } = await axios(API);
    expect(data.status).toBe("ok");
  });
  it("@error", async () => {
    let status;
    try {
      await axios(API_error);
    } catch (error) {
      status = error.response.status;
    }
    //
    expect(status).toBe(httpStatus.BAD_REQUEST);
  });
  it("@500", async () => {
    let status;
    try {
      await axios("this should send 500");
    } catch (error) {
      status = error.response.status;
    }
    //
    expect(status).toBe(httpStatus.INTERNAL_SERVER_ERROR);
  });
});
