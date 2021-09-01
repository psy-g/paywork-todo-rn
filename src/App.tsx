import React from 'react';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';
import Store from './store';
import TodoContainer from './components/todo/TodoContainer';

// import rootReducer, { rootSaga } from './modules';
// import rootReducer from './modules';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <TodoContainer />
    </Provider>
  );
};

export default App;
