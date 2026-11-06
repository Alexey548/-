import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../test-utils";
import UserInfoPage from "./UserInfoPage";

describe("UserInfoPage", () => {
  it("shows default text if user does not exist", () => {
    renderWithRouter(<UserInfoPage />);

    expect(
      screen.getByText(/user not found/i)
    ).toBeInTheDocument();
  });

  it("renders user data when user exists", () => {
    const mockUser = {
      email: "test@mail.com",
      name: "John Doe",
      playlistLink: "/playlists/1",
    };

    renderWithRouter(<UserInfoPage user={mockUser} />);

    expect(screen.getByText("test@mail.com")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /playlist/i })
    ).toBeInTheDocument();
  });
});