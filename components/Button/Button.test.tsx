import { render, screen } from "@/test-utils";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";
describe("Button test cases", () => {
  it("should render", () => {
    const onClick = jest.fn();
    const { asFragment } = render(<Button onClick={onClick}>Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("check onClick  callback", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);
    const element = screen.getByRole("button");
    userEvent.click(element);
    expect(onClick).toHaveBeenCalled();
  });
});
