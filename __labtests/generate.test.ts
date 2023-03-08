import { describe, expect, test } from "vitest";
import { createMocks } from "node-mocks-http";
import handler from "../src/pages/api/generate";

describe("Test api generate", () => {
  test("using a GET method", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await handler(req, res);

    expect(JSON.parse(res._getData())).toEqual({
      greetings: "Hello world",
      message: "OK",
    });
  });

  test("using a POST method", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: { name: "Luis" },
    });

    await handler(req, res);

    expect(JSON.parse(res._getData())).toEqual({
      greetings: "Hello Luis",
      message: "OK",
    });
  });
});
