import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["docsPage"],
  args: {
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  ...Primary,
  args: {
    color: "secondary",
  },
};

export const WarningButton: Story = {
  ...Primary,
  args: {
    color: "warning",
  },
};

export const DangerButton: Story = {
  ...Primary,
  args: {
    color: "danger",
  },
};
