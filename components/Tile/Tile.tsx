import { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import { borderRadius, boxShadow } from "@/components/styles";

export type Props = {
  /** Header */
  header: ReactNode;
  /** children */
  children: ReactNode;
};

export const Section = styled.section`
  padding: 1vmin 4vmin 4vmin;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
  ${borderRadius()}
`;

export const Tile: FC<Props> = ({ header, children, ...rest }) => (
  <>
    <Section {...rest}>
      <h2>{header}</h2>
      {children}
    </Section>
  </>
);
