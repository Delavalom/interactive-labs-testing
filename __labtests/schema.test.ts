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

    expect(data.includes("datasource")).toBe(true);
  });

  test("Does it have generator?", async () => {
    const data = readFileSync(prismaSchema, "utf-8");

    expect(data.includes("generator")).toBe(true);
  });

  test("Does it have models?", async () => {
    const data = readFileSync(prismaSchema, "utf-8");

    const lines = data.split("\n");
    expect(
      lines.filter((line) => line.includes("model")).length
    ).toBeGreaterThan(0);
  });

  test("Does the models have an ID?", async () => {
    const data = readFileSync(prismaSchema, "utf-8");
    const lines = data.split("\n");

    const ids = lines
      .map(
        (line, idx) =>
          line.includes("model") && lines[idx + 1].replace(/\s+/g, " ").trim()
      )
      .filter(Boolean) as string[]

    expect(
      ids.every((id) => id.includes("id Int @id @default(autoincrement())"))
    ).toBe(true);
  });
});
