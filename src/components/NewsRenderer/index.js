import React from 'react';
import styles from './styles.module.scss';

const NewsRenderer = ({news}) => {
  return (
    <div className={styles.wrapper}>
      {news.map((article, index) => {
        return (
          <div className={styles.article} key={index}>
            <div className={styles.content}>
              <img className={styles.image} src={article.urlToImage} alt={'news'}/>
              <div className={styles.description}>
                <div className={styles.title}>
                  {article.title}
                </div>
                <div className={styles.link}>
                  <a
                    className={styles.newsLink}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    {article.description}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

};

export default NewsRenderer;