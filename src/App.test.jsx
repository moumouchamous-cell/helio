import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "./contact";

describe("Helio site", () => {
  it("points every WhatsApp control at the studio number", () => {
    render(<App />);
    const links = screen.getAllByRole("link", { name: /whatsapp/i });

    expect(links.length).toBeGreaterThanOrEqual(4);
    for (const link of links) {
      expect(link).toHaveAttribute("href", WHATSAPP_URL);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    }

    expect(WHATSAPP_URL).toBe("https://wa.me/58936404");
    expect(screen.getAllByText(WHATSAPP_DISPLAY).length).toBeGreaterThan(0);
  });

  it("renders the page story", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /sites people/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /three shapes we return to/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /what we make/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how a project moves/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /hello/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });

  it("opens the menu and closes it with Escape", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /menu/i });
    expect(button).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(window, { key: "Escape" });
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
