import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";

describe("<Input />", () => {
  it("Has the passed value", () => {
    render(
      <Input
        searchText="item 1"
        setSearchText={() => {}}
        filterDisplayedItems={() => {}}
      />
    );
    const searchInput = screen.getByTestId("search-input");
    expect((searchInput as HTMLInputElement).value).toBe("item 1");
  });

  it("Displays the x button when there's a value written", () => {
    const { rerender } = render(
      <Input
        searchText="item 1"
        setSearchText={() => {}}
        filterDisplayedItems={() => {}}
      />
    );
    const xBtn = screen.getByTestId("x-btn");
    expect(xBtn).toBeInTheDocument();

    rerender(
      <Input
        searchText=""
        setSearchText={() => {}}
        filterDisplayedItems={() => {}}
      />
    );
    expect(xBtn).not.toBeInTheDocument();
  });
});
