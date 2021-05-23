import React, {useState, useEffect} from 'react';

import styles from './Wrapper.module.scss';

import News from '../News/News';
import Palette from '../Palette/index';
import Weather from '../Weather';
import useWeather from '../../hooks/useWeather';

const Wrapper = () => {

  const [background, setBackground] = useState('#FFF');

  useEffect(() => {
    const color = window.localStorage.getItem('color');
    if (color) {
      setBackground(color);
    }
    else {
      setBackground('#FFF');
    }
  }, []);

  const handleColorChanging = (colorValue) => {
    window.localStorage.setItem('color', colorValue);
    setBackground(colorValue);
  }


  return (
      <div className={styles.background}
           style={{backgroundColor: background}}>
        <Weather/>
        <Palette changeColor={handleColorChanging}/>
      </div>
  );
};

export default Wrapper;
