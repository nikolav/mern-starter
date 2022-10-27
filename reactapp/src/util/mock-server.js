// enable fake api in components:
// if (process.env.NODE_ENV === "development")
//   require("<mock-server>");

import { setupWorker, rest } from "msw";
import httpStatus from "http-status";

export const API = "http://localhost/api";

const worker = setupWorker(
  // GET /api
  rest.get(API, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ status: "ok" }))
  ),

  // ANY *
  // cacth * fail-safe
  rest.all("*", (req, res, ctx) =>
    res(
      ctx.status(httpStatus.INTERNAL_SERVER_ERROR),
      ctx.json({ message: `undefined handler for [${req.url.toString()}]` })
    )
  )
);

//
worker.start();
