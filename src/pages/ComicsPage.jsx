import { Helmet } from 'react-helmet';

import ComicsList from '../components/ComicsList/ComicsList';
import AppBanner from '../components/AppBanner/AppBanner';

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page with list of our comics" />
        <title>Comics page</title>
      </Helmet>

      <AppBanner />
      <ComicsList />
    </>
  );
};

export default ComicsPage;
