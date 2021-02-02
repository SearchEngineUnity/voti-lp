import React from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function pardotForm({ embed, height, width, col }) {
  return (
    <StyledDiv className={`mx-auto ${col}`}>
      <embed type="text/html" src={embed} height={height} width={width} />
    </StyledDiv>
  );
}

export default pardotForm;
