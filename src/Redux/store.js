import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const initialState = {
    user : null,
    trendingMovies:null,
    topMovies:null
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;