import { render } from "@/test-utils";
import { Icon } from "./Icon";
describe("Icon test cases", () => {
  it("should render", () => {
    const { asFragment } = render(
      <Icon name="Moon" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
