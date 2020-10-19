import React from 'react';
import styles from './SocialCard.module.css';

const SocialCard = ({
  subtitle,
  id = 'social-card',
  title = "Missing Title",
  width = "1024px",
  height = "542px",
}) => {
  const style = {
    width: width,
    height: height,
  };
  return (
    <div id={id} className={styles.card} style={style}>
      <div className={styles.content}>
        <h1>{title}</h1>
        {subtitle && <div>{subtitle}</div>}
        <div className={styles.footer}>
          Johannes Kettmann &nbsp;&nbsp;<span className={styles.separator} />&nbsp;&nbsp; jkettmann.com
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
