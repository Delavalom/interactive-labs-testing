import { readFileSync } from "fs";
import { resolve, join } from "path";
import { describe, expect, test } from "vitest";

const prismaSchema = join(resolve(), "prisma/schema.prisma");

describe("Validate Prisna Schema", () => {
  test("Does the file exits?", async () => {
    const data = readFileSync(prismaSchema, "utf-8");
    expect(!!data).toBeUndefined;
  });

  test("Does it have datasource?", async () => {
    const data = readFileSync(prismaSchema, "utf-8");

    expect(data.includes('datasource')).toBe(true);
  });

  test("Does it have generator?", async () => {
    const data = readFileSync(prismaSchema, "utf-8");

    expect(data.includes('generator')).toBe(true);
  });
});
