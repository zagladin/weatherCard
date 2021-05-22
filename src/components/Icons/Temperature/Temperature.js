import React from 'react';

const Temperature = (
    {
      width,
      height,
      fill,
      ...rest
    }) => (
    <svg
        data-qa="icon"
        data-role="icon-Temperature"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill={fill}
        {...rest}
    >
      <path
          d="M480.768 64a160.768 160.768 0 0 0-160 160v359.744C282.496 623.744 256 675.968 256 736A224.64 224.64 0 0 0 480 960a224.64 224.64 0 0 0 224-224c0-59.264-25.728-110.976-63.232-151.04V224c0-87.744-72.32-160-160-160z m0 64a96 96 0 0 1 96 96v370.56c0 8.96 3.712 17.472 10.496 23.424A159.488 159.488 0 0 1 480 896 159.488 159.488 0 0 1 320 736c0-47.488 20.992-89.28 54.016-119.04a31.68 31.68 0 0 0 10.752-23.68V224a96 96 0 0 1 96-96zM448 320v325.76c-38.272 13.44-64 49.472-64 90.24a96 96 0 0 0 192 0c0-40.768-25.728-76.8-64-90.24V320z"/>
    </svg>

);

Temperature.defaultProps = {
  width: 24,
  height: 24,
  fill: '#fff',
};

export default Temperature;
