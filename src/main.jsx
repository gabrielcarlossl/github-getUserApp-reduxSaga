import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Para configurar o redux Importa provider, cobre o <App></App>, 
// importa createStore, combineReducer, applyMiddleware do redux
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import userSaga from './store/saga'
import userReducer from './store/reducer'

// Inicia a função sagaMiddleware com o createSagaMiddleware,
// inicia a rootReducer com o reducer criado, e instancia a store
// com o createStore e dentro dele passar o reducer, e o middleware

const sagaMiddleware = createSagaMiddleware()

const store = createStore( userReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(userSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
