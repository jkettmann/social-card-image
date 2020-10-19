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
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.footer}>
          Johannes Kettmann
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
