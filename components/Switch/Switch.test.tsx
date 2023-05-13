import { render, screen } from "@/test-utils";
import userEvent from "@testing-library/user-event";
import { Switch } from "./Switch";
describe("Switch test cases", () => {
  const onChange = jest.fn();

  it("should render", () => {
    const { asFragment } = render(<Switch onChange={onChange} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("check onChange  callback", () => {
    render(<Switch onChange={onChange} />);
    const element = screen.getByTestId("switch-label");
    userEvent.click(element);
    expect(onChange).toHaveBeenCalled();
  });
});
