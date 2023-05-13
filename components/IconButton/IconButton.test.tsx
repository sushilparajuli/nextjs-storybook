import { render, screen } from "@/test-utils";
import userEvent from "@testing-library/user-event";
import { IconButton } from "./IconButton";
describe("Button test cases", () => {
  const onClick = jest.fn();
  it("should render", () => {
 
    const { asFragment } = render(<IconButton onClick={onClick} name="Home" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("check onClick  callback", () => {
    render(<IconButton onClick={onClick} name="Home" />);
    const element = screen.getByRole("button");
    userEvent.click(element);
    expect(onClick).toHaveBeenCalled();
  });
});
