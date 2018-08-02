import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

export default function configureStore(rootReducer, initialState={}, middleWares=[]) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, ...middleWares)
    );
}
