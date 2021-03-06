// @flow
import Box from 'grommet/components/Box';
import styled, { css } from 'styled-components';

export function contentStyle() {
  return css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    will-change: opacity;
    @media screen and (max-width: 767px) {
      position: relative;
      align-items: flex-start;
    }
  `;
}

export default styled(Box)`
  ${contentStyle()}
`;
