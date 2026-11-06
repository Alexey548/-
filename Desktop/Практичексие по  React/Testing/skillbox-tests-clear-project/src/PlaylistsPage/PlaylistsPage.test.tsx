import { fireEvent, render, screen } from "@testing-library/react";
import PlaylistsPage from "./PlaylistsPage";

const mockSetSearchParams = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [
    new URLSearchParams(),
    mockSetSearchParams,
  ],
}));

describe("PlaylistsPage", () => {
  beforeEach(() => {
    mockSetSearchParams.mockClear();
  });

  it("calls setSearchParams when typing genre and title", () => {
    render(<PlaylistsPage />);

    const inputs = screen.getAllByRole("textbox");

    fireEvent.change(inputs[0], {
      target: { value: "Rock" },
    });

    fireEvent.change(inputs[1], {
      target: { value: "Hits" },
    });

    expect(mockSetSearchParams).toHaveBeenCalled();
  });
});