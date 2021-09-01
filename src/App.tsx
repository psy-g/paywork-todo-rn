import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './store';
// import Store from './store';
import TodoContainer from './components/todo/TodoContainer';

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <TodoContainer />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
