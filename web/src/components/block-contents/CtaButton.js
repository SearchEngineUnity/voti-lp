import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  color: black;
  font-weight: 600;
  font-size: 20px;
  background-color: #99d9ea;
`;

function CtaButton({ btnText, hash }) {
  return (
    <StyledButton className="btn btn-info rounded-0 border-0" href={`#${hash}`} role="button">
      {btnText}
    </StyledButton>
  );
}

export default CtaButton;
