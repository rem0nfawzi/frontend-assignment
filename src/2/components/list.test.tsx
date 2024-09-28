import { render, screen } from "@testing-library/react";
import List from "./List";

describe("<List />", () => {
  it("Displays the number of passed items", () => {
    const { rerender } = render(
      <List
        listItems={[
          { id: 1, title: "List item 1" },
          { id: 2, title: "List item 2" },
        ]}
      />
    );

    const listItems = screen.queryAllByTestId("list-item");
    expect(listItems.length).toBe(2);

    rerender(<List listItems={[]} />);
    const newRenderedListItems = screen.queryAllByTestId("list-item");
    expect(newRenderedListItems.length).toBe(0);
  });
});
