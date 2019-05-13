import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer } from './reducer'

//create saga middleware
export const sagaMiddleware = createSagaMiddleware()

//create redux store with reducer and middleware
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)