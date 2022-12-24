import { useSelector } from 'react-redux';

import Card from './components/container/container';
import Auth from './components/auth/auth';
import Counter from './components/counter/counter';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(isAuthenticated);

  return <Card>{!isAuthenticated ? <Auth /> : <Counter />}</Card>;
};

export default App;
