import React, {useState, useEffect} from 'react';

import styles from './Wrapper.module.scss';

import News from '../News/News';
import Palette from '../Palette/index';
import Weather from '../Weather';

const Wrapper = () => {

  const [background, setBackground] = useState('#FFF');

  return (
      <div className={styles.background}
           style={{backgroundColor: background}}>
        <Weather/>
      </div>
  );
};

export default Wrapper;
