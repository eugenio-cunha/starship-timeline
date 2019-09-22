import styled from 'styled-components';
import { darken } from 'polished';
import { colorPalette, Grid, radius } from 'stylesheet';

const Button = styled.button`
  display: block;
  padding: ${Grid(2)} ${Grid(4)};
  background-color: ${colorPalette.primary};
  color: ${colorPalette.primaryText};
  cursor: pointer;
  border-radius: ${radius};
  text-align: center;

  &:hover {
    background-color: ${darken(0.1, colorPalette.primary)};
  }
`;

export default Button;
