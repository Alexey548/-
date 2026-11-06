import { renderWithRouter } from "../../test-utils";
import MainPage from "./MainPage";

describe("MainPage", () => {
  it("matches snapshot", () => {
    const { container } = renderWithRouter(<MainPage />);

    expect(container).toMatchSnapshot();
  });
});