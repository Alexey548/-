import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";

export const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};