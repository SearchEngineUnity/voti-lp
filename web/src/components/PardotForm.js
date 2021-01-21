import React from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function pardotForm({ embed, height, width }) {
  return (
    <StyledDiv className="mx-auto">
      <embed type="text/html" src={embed} height={height} width={width} />
    </StyledDiv>
  );
}

export default pardotForm;
