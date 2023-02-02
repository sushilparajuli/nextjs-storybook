import { render } from "@testing-library/react";
import { Button } from "./Button";
describe("Button test cases", () => {
  it("should render", () => {
    const onClick = jest.fn();
    const { asFragment } = render(<Button onClick={onClick}>Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
