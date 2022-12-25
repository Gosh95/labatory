import { useSelector } from 'react-redux';

import Card from './components/container/container';
import Auth from './components/auth/auth';
import Counter from './components/counter/counter';
import { ReducerType } from './store/reducers/root';

const App = () => {
  const isAuthenticated = useSelector<ReducerType, boolean>((state) => state.auth.isAuthenticated);

  return <Card>{!isAuthenticated ? <Auth /> : <Counter />}</Card>;
};

export default App;
