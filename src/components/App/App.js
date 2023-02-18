import { useState } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import CharInfo from '../CharInfo/CharInfo';
import CharList from '../CharList/CharList';
import RandomChar from '../RandomChar/RandomChar';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import decoration from '../../assets/img/vision.png';

const App = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
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
      </main>
    </div>
  );
};

export default App;
