import React from 'react';
import PropTypes from 'prop-types';

const Wind = (
  {
    width,
    height,
    fill,
  },
) => (
  <svg
    data-qa="icon"
    data-role="icon-Wind"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    fill={fill}
  >
    <path
      d="M128 128v768h64V128z m160 0c-17.728 0-32 14.272-32 32v320c0 8.96 3.776 17.728 10.496 23.744 6.784 6.016 15.744 8.96 24.512 8.256l640-64A32.256 32.256 0 0 0 960 416v-192a32.256 32.256 0 0 0-28.992-32l-640-64H288zM320 195.52l64 6.208v236.544l-64 6.208z m128 12.48l64 6.528v210.944L448 432z m128 12.992l64 6.528v184.96l-64 6.528z m128 12.8l64 6.208v160l-64 6.272z m128 12.736l64 6.464v134.016l-64 6.464z"
    />
  </svg>

);

Wind.defaultProps = {
  width: 24,
  height: 24,
  fill: '#fff',
};

Wind.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default React.memo(Wind);
