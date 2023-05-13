import { render, screen } from "@/test-utils";
import userEvent from "@testing-library/user-event";
import { CheckBox } from "./Checkbox";
describe("CheckBox test cases", () => {
  const onChange = jest.fn();

  it("should render", () => {
    const { asFragment } = render(<CheckBox onChange={onChange} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("check onChange  callback", () => {
    render(<CheckBox onChange={onChange} />);
    const element = screen.getByText("✔");
    userEvent.click(element);
    expect(onChange).toHaveBeenCalled();
  });
});
