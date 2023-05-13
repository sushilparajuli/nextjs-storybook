import { render, screen } from "@/test-utils";
import { Icon } from "./Icon";
describe("Button test cases", () => {
  it("should render", () => {
    const { asFragment } = render(
      <Icon name="Moon" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
