import React from 'react';
import styles from './styles.module.scss';

const Compass = ({direction}) => {
  const customStyles = {
    transform: `rotate(${direction}deg`,
    keyframes: `shake rotate(${direction}deg`,
  };

  return (
      <div className={styles.compass}>
        <div className={styles.bezelVertical}>
          <div className={styles.bezelHorizontal}>
            <div className={styles.innerCircle}>
              <div className={styles.arrow}
                   style={customStyles}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default React.memo(Compass);
