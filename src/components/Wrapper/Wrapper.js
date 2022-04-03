import React, {useState, useCallback} from 'react';

import styles from './Wrapper.module.scss';

import Palette from '../Palette/index';
import Weather from '../Weather';

const Wrapper = () => {

  const color = window.localStorage.getItem('color');
  const [background, setBackground] = useState(color || '#FFF');

  const handleColorChanging = useCallback((colorValue) => {
    window.localStorage.setItem('color', colorValue);
    setBackground(colorValue);
  }, []);

  return (
      <div className={styles.background}
           style={{backgroundColor: background}}>
        <Weather/>
        <Palette changeColor={handleColorChanging}/>
      </div>
  );
};

export default React.memo(Wrapper);
