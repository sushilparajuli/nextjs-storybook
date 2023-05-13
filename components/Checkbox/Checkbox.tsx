import styled from "@emotion/styled"
import { ChangeEvent, FC, useId } from "react"
import { Icon } from "../Icon";
import { boxShadow, transition } from "../styles";

type Props = {
    /** onChange callback */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.label`
  font-size: 1.8rem;
  & input {
    display: none;
  }
  & input:checked {
    & ~ label {
      ${({ theme }) =>
        boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
      color: ${({ theme }) => theme.font.regular};
    }
  }
`
const Label = styled.label`
display: inline-block;
user-select: none;
cursor: pointer;
text-align: center;
border-radius: 0.5rem;
width: 2.5rem;
height: 2.5rem;
color: rgba(0, 0, 0, 0);
background: ${({ theme }) => theme.components.background};
${({ theme }) =>
  boxShadow(theme.components.shadow1, theme.components.shadow2)}
${transition()};
&:hover {
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
}
`;
export const CheckBox : FC<Props> = ({onChange}) => {
  const fieldId = useId()
  return (
    <Wrapper>
      <input id={fieldId} type="checkbox" onChange={onChange} />
      <Label htmlFor={fieldId}>✔</Label>
    </Wrapper>
  )
}