import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    const headings = screen.getAllByText(/vite/i);
    expect(headings[0]).toBeInTheDocument();
  });
});
