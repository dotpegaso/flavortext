import React from 'react'
import ReactDOM from 'react-dom'
import './_sass/index.scss'

import { Provider } from 'react-redux'
import { watcherSaga } from './_redux/sagas'

import {sagaMiddleware, store} from './_redux/store'
import Card from './components/card'

//run the saga
sagaMiddleware.run(watcherSaga)

ReactDOM.render(
    <Provider store={store}>
        <Card />
    </Provider>,
    document.getElementById('root')
);
