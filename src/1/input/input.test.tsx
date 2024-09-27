import { render, screen } from "@testing-library/react";
import Input from "./Input";
import "@testing-library/jest-dom";

describe("<Input />", () => {
  it("Shows the passed value", async () => {
    render(
      <Input
        id="name"
        name="Name"
        value="Remon"
        setValue={() => {}}
        error={null}
        setError={() => {}}
        validateInput={(x) => true}
      />
    );
    const inputElement = screen.getByTestId("input-field");
    const inputValue = (inputElement as HTMLInputElement).value;
    expect(inputValue).toBe("Remon");
  });

  it("Shows the passed error", async () => {
    const { rerender } = render(
      <Input
        id="name"
        name="Name"
        value="Remon"
        setValue={() => {}}
        error="This is an error message"
        setError={() => {}}
        validateInput={(x) => true}
      />
    );
    const errorElement = screen.getByTestId("error");
    expect(errorElement).toHaveTextContent("This is an error message");

    // Update error message prop and make sure it's removed from the DOM
    rerender(
      <Input
        id="name"
        name="Name"
        value="Remon"
        setValue={() => {}}
        error={null}
        setError={() => {}}
        validateInput={(x) => true}
      />
    );
    expect(errorElement).not.toBeInTheDocument();
  });
});
