import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Para configurar o redux Importa provider, cobre o <App></App>, 
// importa createStore, combineReducer, applyMiddleware do redux
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Inicia a função sagaMiddleware com o createSagaMiddleware,
// inicia a rootReducer com o reducer criado, e instancia a store
// com o createStore e dentro dele passar o reducer, e o middleware

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers()
const store = createStore( rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(userSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
