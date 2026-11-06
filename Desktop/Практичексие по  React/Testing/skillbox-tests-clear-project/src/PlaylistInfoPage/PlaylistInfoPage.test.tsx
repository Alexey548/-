import { screen } from "@testing-library/react";
import { renderWithRouter } from "../testes/test-utils.tsx";
import PlaylistInfoPage from "./PlaylistInfoPage.tsx";

describe("PlaylistInfoPage", () => {
  it("shows default text if playlist is not available", () => {
    renderWithRouter(<PlaylistInfoPage />);

    expect(screen.getByText(/playlist not found/i)).toBeInTheDocument();
  });

  it("renders playlist data when available", () => {
    const mockPlaylist = {
      name: "Rock Hits",
      genre: "Rock",
      songs: ["Song 1", "Song 2", "Song 3"],
    };

    renderWithRouter(<PlaylistInfoPage playlist={mockPlaylist} />);

    expect(screen.getByText("Rock Hits")).toBeInTheDocument();
    expect(screen.getByText("Rock")).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
  });
});