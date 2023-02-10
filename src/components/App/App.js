import AppHeader from '../AppHeader/AppHeader';
import CharInfo from '../CharInfo/CharInfo';
import CharList from '../CharList/CharList';
import RandomChar from '../RandomChar/RandomChar';

import decoration from '../../assets/img/vision.png';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar />
        <div className="char__content">
          <CharList />
          <CharInfo />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};

export default App;
