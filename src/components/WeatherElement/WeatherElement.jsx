import React from 'react';
import styles from './WeatherElement.module.scss';
import PropTypes from 'prop-types';

const WeatherElement = (
    {
      name,
      value,
      suffix,
      nameSize,
      valueSize,
    },
) => {
  return (
      <div className={styles.weatherElement}>
        <div style={{fontSize: `${nameSize}px`}}>{name}</div>
        <div style={{fontSize: `${valueSize}px`}}>
          {value}
          {suffix && (
              <span>{suffix}</span>
          )}
        </div>
      </div>
  );
};

WeatherElement.defaultProps = {
  suffix: null,
  nameSize: null,
  valueSize: null,
};

WeatherElement.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  nameSize: PropTypes.number,
  valueSize: PropTypes.number,

};

export default React.memo(WeatherElement);
