import styled from 'styled-components';

import { useDotAnimation } from '../../hooks/useDotAnimation';

const StyledCanvas = styled.canvas`
  position: absolute;
  z-index: 0;
`;

const DotAnimation = () => {
  const { canvasRef } = useDotAnimation();

  return <StyledCanvas ref={canvasRef} />;
};

export default DotAnimation;
