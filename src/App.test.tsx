import { render } from "@testing-library/react";
import App from "./App";

describe("Root component", () => {
  it("should be in the document", () => {
    const rendered = render(<App />);
    expect(rendered).toBeTruthy();
  });
});
