import { describe, expect, test } from "vitest";
import { authOptions } from "../src/server/auth";

describe("Test authOptions", () => {
  test("it's has a provider", () => {
    expect("providers" in authOptions).toBe(true);
  });
  test("it's has an adapter", () => {
    expect("adapter" in authOptions).toBe(true);
  });
  test("it's has a callback", () => {
    expect("jwt" in authOptions.callbacks).toBe(true);
  });
});
