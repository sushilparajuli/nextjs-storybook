import { render, screen } from "@/test-utils";
import { Tile } from "./Tile";
describe("Button test cases", () => {
  it("should render", () => {
    const { asFragment } = render(
      <Tile header="This is title">This is content</Tile>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});