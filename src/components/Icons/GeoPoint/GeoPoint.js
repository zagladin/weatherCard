import React from 'react';

const GeoPointIcon = ({
  width,
  height,
  fill,
  ...rest
}) => (
  <svg
    data-qa="icon"
    data-role="icon-GeoPoint"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 16"
    fill={fill}
    {...rest}
  >
    <path
      d="M6.00163 0C2.80647 0 0.207031 2.59944 0.207031 5.79456C0.207031 9.75981 5.39262 15.581 5.61341 15.8269C5.82078 16.0579 6.18284 16.0575 6.38984 15.8269C6.61063 15.581 11.7962 9.75981 11.7962 5.79456C11.7962 2.59944 9.19675 0 6.00163 0ZM6.00163 8.70997C4.39406 8.70997 3.08625 7.40212 3.08625 5.79456C3.08625 4.187 4.39409 2.87919 6.00163 2.87919C7.60916 2.87919 8.91697 4.18703 8.91697 5.79459C8.91697 7.40216 7.60916 8.70997 6.00163 8.70997Z"
      fill={fill}/>
  </svg>

);

GeoPointIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#fff',
};

export default GeoPointIcon;
