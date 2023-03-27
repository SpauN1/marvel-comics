import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Skeleton from '../Skeleton/Skeleton';
import Spinner from '../Spinner/Spinner';

import './CharInfo.scss';

const CharInfo = (props) => {
  const [char, setChar] = useState(null);

  const { process, setProcess, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }

    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const setContent = (process, char) => {
    switch (process) {
      case 'waiting':
        return <Skeleton />;

      case 'loading':
        return <Spinner />;

      case 'confirmed':
        return <View char={char} />;

      case 'error':
        return <ErrorMessage />;

      default:
        throw new Error('Unexpected process state');
    }
  };

  return <div className="char__info">{setContent(process, char)}</div>;
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;

  let imgStyle = { objectFit: 'cover' };
  if (
    thumbnail ===
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
  ) {
    imgStyle = { objectFit: 'contain' };
  }

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : 'There is no comics with this character'}
        {comics.slice(0, 10).map((item, i) => {
          const comicId = item.resourceURI.substring(43);
          return (
            <Link
              to={`/comics/${comicId}`}
              key={i}
              className="char__comics-item"
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
