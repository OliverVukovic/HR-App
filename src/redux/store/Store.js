// import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer/Reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../../saga/rootSaga";
import { createStore, applyMiddleware, compose } from "redux"



const sagaMiddleware = createSagaMiddleware()

// const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	withDevTools(applyMiddleware(...[sagaMiddleware]))
)

sagaMiddleware.run(rootSaga);

export default store;








// const store = createStore(
//     reducer, / preloadedState, /
//  +  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
//   );




