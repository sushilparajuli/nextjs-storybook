import { FC, ReactElement } from "react";

import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import { Themes } from "./styles/theme";

const Wrapper: FC = ({ children }) => (
  <ThemeProvider theme={Themes.light}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
