import React from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function pardotForm({ embed, height, width, col }) {
  return (
    // <StyledDiv className="mx-auto">
    <div className={col}>
      <embed type="text/html" src={embed} height={height} width={width} />
    </div>
    // </StyledDiv>
  );
}

export default pardotForm;
