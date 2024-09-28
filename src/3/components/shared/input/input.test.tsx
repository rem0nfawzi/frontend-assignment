import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";

describe("Task3 <Input />", () => {
  it("Shows the passed value", () => {
    render(<Input value="Hello world" setValue={() => {}} />);
    const inputElement = screen.getByTestId("input");
    expect(inputElement as HTMLInputElement).toHaveValue("Hello world");
  });

  it("Shows and hide the clear button based on input value", () => {
    const { rerender } = render(
      <Input value="Hello world" setValue={() => {}} />
    );
    const clearBtn = screen.getByTestId("clear-btn");
    expect(clearBtn).toBeInTheDocument();
    rerender(<Input value="" setValue={() => {}} />);
    expect(clearBtn).not.toBeInTheDocument();
  });
});
