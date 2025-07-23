import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';

import fantasy from './data/fantasy.json';

const App = () => (
  <>
    <MyNav />
    <Welcome />
    <BookList books={fantasy} />
    <MyFooter />
  </>
);

export default App;
