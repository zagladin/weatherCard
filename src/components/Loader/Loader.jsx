import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import styles from './styles.module.scss';

const Loader = () => {
  const [count, setCount] = useState(0);
  const stringsArray = useMemo(() => [
    'Launching the weather probe',
    'Setting the link',
    'Establishing connection',
    'Processing the data',
  ], []);

  useEffect(() => {
    let intervalId;

    if (count < 4) {
      intervalId = setInterval(() => {
        setCount((prevState) => prevState + 1);
      }, 2000);
    } else {
      setCount(0);
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loading}>
        <span>{stringsArray[count]}</span>
        <span className={styles.dot1} />
        <span className={styles.dot2} />
        <span className={styles.dot3} />
      </div>
    </div>
  );
};

export default React.memo(Loader);
