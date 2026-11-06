import { fireEvent, render, screen } from "@testing-library/react";
import UsersPage from "./UsersPage";

const mockSetSearchParams = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [
    new URLSearchParams(),
    mockSetSearchParams,
  ],
}));

describe("UsersPage", () => {
  beforeEach(() => {
    mockSetSearchParams.mockClear();
  });

  it("calls setSearchParams when typing username", () => {
    render(<UsersPage />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "John" },
    });

    expect(mockSetSearchParams).toHaveBeenCalled();
  });
});