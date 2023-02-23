import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import ComicsPage from '../../pages/ComicsPage';
import Page404 from '../../pages/404';
import AppHeader from '../AppHeader/AppHeader';

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
