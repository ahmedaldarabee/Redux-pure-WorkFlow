import './App.css';
import { Provider } from 'react-redux';
import storeManager from './store/index'
import Counter from './components/Counter'

const App = () => {

  return (
    <>
      <Provider store={storeManager}>
        <Counter/>
      </Provider>
    </>
  );
}

export default App;
