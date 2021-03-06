import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Layout from "../../components/layout/Layout";
import "@testing-library/jest-dom";

describe("Layout", () => {
  it("should render the header", () => {
    const textToFind = "The Movie Finder";

    render(<Layout />);
    const title = screen.getByText(textToFind);

    expect(title).toBeInTheDocument();
  });
  it("should render the links with correct names", () => {
    render(<Layout />);
    const links = screen.getAllByRole("link");
    // "/" to be replaced with proper routes
    expect(links).toHaveLength(8);
    //Checks that route matches tect content of attribute
    links.map((link) =>
      expect(link).toHaveAttribute("href", "/" || link.textContent)
    );
  });
});
