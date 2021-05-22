import React from 'react';
import styles from './styles.module.scss';

const Link = ({id, selected, title, selectResource}) =>
    <div
        className={!selected ? `${styles.selector}` : `${styles.selector} ${styles.active}`}
        onClick={() => selectResource(id)}>
        {title}
    </div>

export default Link;