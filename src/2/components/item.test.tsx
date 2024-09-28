import { render, screen } from "@testing-library/react";
import Item from "./Item";
import "@testing-library/jest-dom";

describe("<Item />", () => {
  it("Displays the passed text", () => {
    render(<Item id={1} title="List item 1" />);
    const item = screen.getByTestId("list-item");
    expect(item).toHaveTextContent("List item 1");
  });
});
