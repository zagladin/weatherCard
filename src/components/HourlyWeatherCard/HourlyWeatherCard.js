import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { timeStampConverter } from '../../helpers/helper';
import Wind from '../Icons/Wind/Wind';

const HourlyWeatherCard = (
  {
    dateTime,
    temperature,
    icon,
    pops,
    uvindex,
    wind,
  },
) => (
  <div className={styles.hourlyWeatherWrapper}>
    <div className={styles.temps}>
      <div className={styles.temperature}>
        {temperature}
      </div>
    </div>
    <div className={styles.uvindex}>
      UV
      {' '}
      {uvindex}
    </div>
    <div className={styles.pops}>
      <img src={icon} alt="{weather icon}" />
      {pops}
    </div>
    <div className={styles.wind}>
      <Wind width={24} height={24} />
      {wind}
      {' '}
      m/s
    </div>
    <div className={styles.dateTime}>
      {timeStampConverter(dateTime)}
    </div>
  </div>
);

HourlyWeatherCard.propTypes = {
  dateTime: PropTypes.number.isRequired,
  temperature: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  pops: PropTypes.string.isRequired,
  uvindex: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default React.memo(HourlyWeatherCard);
