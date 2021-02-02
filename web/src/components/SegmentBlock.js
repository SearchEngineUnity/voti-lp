import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from './block-contents/SegmentSerializer';

function SegmentBlock({ col, title, _rawText }) {
  return (
    <div className={col}>
      <h2 className="mb-4 text-break">{title.replace(/-/g, '‑')}</h2>
      <BlockContent blocks={_rawText} />
    </div>
  );
}

SegmentBlock.propTypes = {
  col: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  _rawText: PropTypes.array.isRequired,
};

export default SegmentBlock;
