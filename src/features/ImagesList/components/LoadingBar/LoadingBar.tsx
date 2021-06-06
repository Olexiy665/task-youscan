import React from 'react';
import classSet from 'classnames';
import styles from './LoadingBar.module.css';

export const LoadingBar = ({ isActive }: { isActive: boolean }) => (
  <div className={classSet(styles.Slider, { [styles.isActive]: isActive })}>
    <div className={styles.Line} />
    <div className={classSet(styles.Subline, styles.Inc)} />
    <div className={classSet(styles.Subline, styles.Dec)} />
  </div>
);
