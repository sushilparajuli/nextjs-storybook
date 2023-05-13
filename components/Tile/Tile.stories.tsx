import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";

import { Tile } from "./Tile";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Tile> = {
  title: "Components/Tile",
  component: Tile,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const BasicTile: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("heading")).toBeInTheDocument();
  },
  args: {
    header: "Header",
    children: `Content goes here`,
  },
};
