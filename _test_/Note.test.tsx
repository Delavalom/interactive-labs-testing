import { test, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import Note from "../src/pages/[note]";
import Link from "next/link";

vi.mock("next/router", () => require("next-router-mock"));

describe("Note", () => {
  test("Dynamic route should displays correct pathname inside heading asadasda", async () => {
    mockRouter.push("/?note=asadasda");
    render(<Note />);
    const noteTitleElement = screen.getAllByRole("heading", { level: 1 });
    expect(noteTitleElement[0].textContent).toContain("asadasda");
  });
  test("Dynamic route should displays correct pathname inside heading pedro", async () => {
    mockRouter.push("/?note=pedro");
    render(<Note />);
    const noteTitleElement = screen.getAllByRole("heading", { level: 1 });
    expect(noteTitleElement[1].textContent).toContain("pedro");
  });
  test("Dynamic route should displays correct pathname inside heading juan", async () => {
    mockRouter.push("/?note=juan");
    render(<Note />);
    const noteTitleElement = screen.getAllByRole("heading", { level: 1 });
    expect(noteTitleElement[2].textContent).toContain("juan");
  });
});

vi.mock("next/link", () => <Link href="/"></Link>);
describe("Link", () => {
  test("Is Link component present with his attributes?", async () => {
    render(<Note />);
    const link = <Link href="/" />;
  });
});
