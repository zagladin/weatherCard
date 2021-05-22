import React from 'react';

const Humidity = (
    {
      width,
      height,
      fill,
      ...rest
    }) => (
    <svg
        data-qa="icon"
        data-role="icon-humidity"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill={fill}
        {...rest}
    >
      <path
          d="M480 64A416.32 416.32 0 0 0 64 480C64 709.504 250.496 896 480 896c2.24 0 4.48-0.256 6.72-0.768 19.52-0.256 39.04-1.984 57.792-4.992a252.288 252.288 0 0 1-24-60.8c-13.248 1.536-26.752 2.56-40.512 2.56A351.552 351.552 0 0 1 128 480C128 285.248 285.248 128 480 128a352.256 352.256 0 0 1 340.992 264c-0.256 0-0.256 0 0 0 1.984 7.744 3.008 15.744 4.48 23.744l14.72 17.28c12.288 13.696 32.576 37.952 54.784 66.944 0.256-6.464 1.024-13.248 1.024-19.968 0-33.472-4.224-67.2-12.224-99.52a83.84 83.84 0 0 0-0.768-4.48A416.768 416.768 0 0 0 480 64z m0 128C321.28 192 192 321.28 192 480a32 32 0 1 0 64 0 223.616 223.616 0 0 1 299.008-211.008l48.96-48.512a287.744 287.744 0 0 0-119.68-28.224C482.688 192 481.408 192 480 192z m191.232 63.744a32.448 32.448 0 0 0-21.952 9.728l-191.808 192a31.872 31.872 0 1 0 45.056 45.056l192.192-192a32.192 32.192 0 0 0 7.04-35.264 32.64 32.64 0 0 0-30.528-19.52zM768 447.232l-24 27.776s-40.96 46.976-81.984 105.472c-20.736 29.248-41.536 61.504-57.536 93.248C588.48 705.472 576 736.256 576 768c0 105.728 86.272 192 192 192s192-86.272 192-192c0-31.744-12.48-62.528-28.48-94.272-16-31.744-36.8-64-57.536-93.248-40.96-58.496-81.984-105.472-81.984-105.472z m0 100.736c14.016 17.024 27.008 31.04 54.016 69.312 19.2 27.712 38.464 57.984 52.48 85.44 14.016 27.264 21.504 52.8 21.504 65.28 0 71.04-56.96 128-128 128-71.04 0-128-56.96-128-128 0-12.48 7.488-38.016 21.504-65.28 14.016-27.52 33.28-57.728 52.48-85.44 27.008-38.272 40-52.288 54.016-69.248z"/>
    </svg>

);

Humidity.defaultProps = {
  width: 24,
  height: 24,
  fill: '#fff',
};

export default React.memo(Humidity);
