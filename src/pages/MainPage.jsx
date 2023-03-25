import { useState } from 'react';
import { Helmet } from 'react-helmet';

import CharInfo from '../components/CharInfo/CharInfo';
import CharList from '../components/CharList/CharList';
import RandomChar from '../components/RandomChar/RandomChar';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import CharSearchForm from '../components/CharSearchForm/CharSearchForm';

import decoration from '../../src/assets/img/vision.png';

const MainPage = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };

  const style = {
    top: '25px',
    position: 'sticky',
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information portal" />
        <title>Marvel information portal</title>
      </Helmet>

      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div style={style}>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearchForm />
          </ErrorBoundary>
        </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
