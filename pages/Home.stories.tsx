// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Home from "./index";

const meta: Meta<typeof Home> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Page/HOME",
  component: Home,
};

export default meta;
type Story = StoryObj<typeof Home>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Home />,
};
