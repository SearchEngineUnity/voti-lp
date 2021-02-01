import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSegmentContainer = styled.section`
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
`;

function SegmentContainer({ idTag, textColor, bgColor }) {
  return <StyledSegmentContainer id={idTag} className="py-5" color={textColor} bgColor={bgColor} />;
}

export default SegmentContainer;
