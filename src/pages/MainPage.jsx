import { useState } from 'react';

import CharInfo from '../components/CharInfo/CharInfo';
import CharList from '../components/CharList/CharList';
import RandomChar from '../components/RandomChar/RandomChar';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import decoration from '../../src/assets/img/vision.png';

const MainPage = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };

  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharInfo charId={selectedChar} />
        </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
