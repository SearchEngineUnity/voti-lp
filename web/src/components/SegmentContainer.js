import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSegmentContainer = styled.section`
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
`;

function SegmentContainer({ idTag, color, bgColor, children }) {
  return (
    <StyledSegmentContainer id={idTag} className="py-5" color={color} bgColor={bgColor}>
      <Container>{children}</Container>
    </StyledSegmentContainer>
  );
}

export default SegmentContainer;
