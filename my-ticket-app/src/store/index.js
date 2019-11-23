import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { Modal } from 'antd';

import createRootReducer from './reducer';
import rootSaga from './saga';

export const create = () => {
  const history = createBrowserHistory({
    getUserConfirmation(message, callback) {
      // Show some custom dialog to the user and call
      // callback(true) to continue the transiton, or
      // callback(false) to abort it.
      Modal.confirm({
        title: message,
        onOk() {
          callback(true);
        },
        onCancel() {
          callback(false);
        },
      });
    },
  });
  const initialState = {};
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [thunk, sagaMiddleware, routerMiddleware(history)];
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );
  const store = createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers,
  );
  sagaMiddleware.run(rootSaga);
  return [history, store];
};

const [history, store] = create();

export { history };
export default store;
