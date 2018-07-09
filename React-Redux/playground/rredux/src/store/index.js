import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import {loggerMiddleware, modifyContactAPIReq} from '../moddleware/contactMiddleware';

const middlewares = applyMiddleware(loggerMiddleware, modifyContactAPIReq);
const store = createStore(reducers, middlewares);

export default store;