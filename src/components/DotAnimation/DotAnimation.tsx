import React from 'react';
import styled from 'styled-components';
import { useDotAnimation } from '../../hooks/useDotAnimation';

const StyledCanvas = styled.canvas`
  z-index: 0;
  position: absolute;
`;

const DotAnimation: React.FC = () => {
  const { canvasRef } = useDotAnimation();

  return <StyledCanvas ref={canvasRef} />;
};

export default DotAnimation;
