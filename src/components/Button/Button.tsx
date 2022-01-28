import styled from 'styled-components';

interface ButtonProps {
  backgroundColor: string;
  colorSvg: string;
  sizeSvg: number;
}

export const Button = styled.button<ButtonProps>`
  min-width: 47px;
  height: 45px;
  border-radius: 100%;
  border: none;
  background: ${(props) => props.backgroundColor};

  svg {
    color: ${(props) => props.colorSvg};
    font-size: ${(props) => props.sizeSvg}rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;