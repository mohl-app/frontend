import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /digging into full-stack development\./i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument();
  });
});
