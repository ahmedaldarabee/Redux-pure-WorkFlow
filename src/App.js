import './App.css';
import { Provider } from 'react-redux';
import storeManager from './store/index'
import Counter from './components/Counter'
    {/*
    - the provider to listen any updates and provided or running it! where act as subscribe in redux work flow
    - the movement the data as you know in redux work flow it be in run time by using provider.
    */}

const App = () => {

  return (
      <Provider store={storeManager}>
        <Counter/>
      </Provider>
  );
}

export default App;
