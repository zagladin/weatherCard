import React, {useState, useEffect} from 'react';
import {getNews} from "../../api/api";
import styles from './styles.module.scss';

import Loader from '../Loader';
import Link from "../Link";
import NewsRenderer from "../NewsRenderer";

const News = () => {
  const [news, setNews] = useState({
    titles: '',
    descriptions: '',
    articles: [],
    resource: 'google-News-ru',
    totalResults: '',
  });

  useEffect(() => {
    checkNews(news.resource);
  }, [news.resource]);


  const [loading, setLoading] = useState(false);
  const [selectedGoogle, setSelectedGoogle] = useState(false);
  const [selectedLenta, setSelectedLenta] = useState(false);

  const checkNews = (resource, id) => {
    setLoading(true);

    switch (id) {
      case 'google':
        setSelectedGoogle(true);
        setSelectedLenta(false);
        break;
      case 'lenta':
        setSelectedLenta(true);
        setSelectedGoogle(false);
        break;
      default:
        setSelectedGoogle(true);
    }

    getNews(resource)
      .then(res => {
        setLoading(false);
        setNews(prevState => (
          {
            ...prevState,
            articles: res.articles,
            totalResults: res.totalResults // maybe I will need this one later
          }
        ));
      })
      .catch(error => console.log(error));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectors}>
        <div className={styles.links}>
          <Link title={'Google'}
                id={'google'}
                selected={selectedGoogle}
                selectResource={(id) => checkNews('google-News-ru', id)}/>
          <Link title={'Lenta'}
                id={'lenta'}
                selected={selectedLenta}
                selectResource={(id) => checkNews('lenta', id)}/>
        </div>
        <div className={styles.copyright}>
          powered by NewsAPI.org
        </div>
      </div>
      {loading ? <Loader/> : <NewsRenderer news={news.articles}/>}
    </div>
  )
}

export default React.memo(News);
