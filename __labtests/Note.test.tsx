import {vi, describe, test, expect} from 'vitest'
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import Note from "../src/pages/[note]";
import Link from "next/link";

vi.mock("next/router", () => require("next-router-mock"));

describe("Note", () => {
  test("Dynamic route should displays correct pathname inside heading", async () => {
    mockRouter.push("/?note=first-note");
    render(<Note />);
    const noteTitleElement = screen.getAllByRole("heading", { level: 1 });
    expect(noteTitleElement[0].textContent).toContain("first-note");
  });
  test("Dynamic route should displays correct pathname inside heading", async () => {
    mockRouter.push("/?note=employees");
    render(<Note />);
    const noteTitleElement = screen.getAllByRole("heading", { level: 1 });
    expect(noteTitleElement[1].textContent).toContain("employees");
  });
  test("Dynamic route should displays correct pathname inside heading", async () => {
    mockRouter.push("/?note=adadsadsad");
    render(<Note />);
    const noteTitleElement = screen.getAllByRole("heading", { level: 1 });
    expect(noteTitleElement[2].textContent).toContain("adadsadsad");
  });
});