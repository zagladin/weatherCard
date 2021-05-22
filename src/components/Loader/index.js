import React from 'react';

import styles from './styles.module.scss';
import Spinner from './Bars.svg';

const Loader = () => (
  <img src={Spinner}
       className={styles.spinner}
       alt='loader'/>
);


export default Loader;
