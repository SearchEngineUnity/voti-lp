import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import BlockContent from './block-contents/SegmentSerializer';

function SegmentBlock({ col, title, _rawText }) {
  return (
    <div className={col}>
      <h2 className="pb-3">{title}</h2>
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
