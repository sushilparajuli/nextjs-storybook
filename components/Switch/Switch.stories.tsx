import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { Switch } from "./Switch";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const BasicSwitch: Story = {
  play: async ({ args,canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElm = canvas.getByTestId("switch-label");
    await expect(switchElm).toBeInTheDocument();
    userEvent.click(switchElm);
    await expect(args.onChange).toHaveBeenCalled();
  }
};
