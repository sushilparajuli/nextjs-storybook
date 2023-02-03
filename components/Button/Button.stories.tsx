import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["docsPage"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onClick).toHaveBeenCalled();
  },
  args: {
    color: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  ...Primary,
  args: {
    color: "secondary",
    children: "Button",
  },
};

export const WarningButton: Story = {
  ...Primary,
  args: {
    color: "warning",
    children: "Button",
  },
};

export const DangerButton: Story = {
  ...Primary,
  args: {
    color: "danger",
    children: "Button",
  },
};
