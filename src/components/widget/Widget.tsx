import './Widget.scss';

import { useRef } from 'react';

import { ArrowRightUp, Close, ReadBook } from '@icon-park/react';

import { Article, WeatherDataCurrent } from '../../api/types';

enum SHAPES {
  SQUARE = "square",
  CIRCLE = "circle",
}

type shape = `${SHAPES}`;

interface WidgetProps {
  shape: shape;
  newsData?: Article;
  weatherData?: WeatherDataCurrent;
}

function Widget({ shape, newsData, weatherData }: WidgetProps) {
  const modal = useRef<HTMLDialogElement>(null);

  const { title, description, url, urlToImage, content } = newsData ?? {};

  const openModal = () => {
    if (!modal.current) return;
    modal.current.showModal();
  };

  const closeModal = () => {
    if (!modal.current) return;

    modal.current.setAttribute("closing", "");

    modal.current.addEventListener(
      "animationend",
      () => {
        if (!modal.current) return;

        modal.current.removeAttribute("closing");
        modal.current.close();
      },
      { once: true }
    );
  };

  const NewsContent = () => (
    <>
      {urlToImage && (
        <div className="widget__image">
          <img src={urlToImage} alt={title + " image"} />
        </div>
      )}
      <h4 className="widget__header">{title}</h4>
      {description && <p className="widget__description">{description}</p>}
      <div className="widget__button-group">
        {content && (
          <button className="widget__button" onClick={openModal}>
            Read more <ReadBook />
          </button>
        )}
        {url && (
          <button className="widget__button">
            <a href={url} rel="noopener noreferrer" target="_blank">
              Go to article
              <ArrowRightUp />
            </a>
          </button>
        )}
      </div>
      {content && (
        <dialog ref={modal} className="modal">
          <button className="close" onClick={closeModal}>
            <Close />
          </button>
          <h3>{title}</h3>
          <p>{content}</p>
        </dialog>
      )}
    </>
  );

  return (
    <div className={`widget widget--${shape}`}>
      {newsData && <NewsContent />}
      {/* TODO: this is bullshit, need to seperate weather from news */}
      {weatherData && (
        <div className="widget__weather-home">
          <span>
            {new Date(weatherData.location.localtime)
              .toLocaleTimeString()
              .slice(0, -3)}
          </span>
          <span className="main-temperature">
            {weatherData.current.feelslike_c} C°
          </span>
          <span>{weatherData.location.region}</span>
        </div>
      )}
    </div>
  );
}

export default Widget;
