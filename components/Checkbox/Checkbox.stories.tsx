import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { CheckBox } from "./Checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof CheckBox> = {
  title: "Components/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const BasicCheckbox: Story = {
  play: async ({ args,canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByText("✔")
    await expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);
    await expect(args.onChange).toHaveBeenCalled();
  }
};
