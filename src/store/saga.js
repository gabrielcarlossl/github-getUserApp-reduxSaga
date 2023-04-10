// No saga importa o call que funciona para chamar uma função
// importar o put que serve para despachar uma ação para o store
import { call, put, takeLatest } from 'redux-saga/effects'

// importa as actions
import {
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  fetchUserFailure,
} from './actions'

// a saga lida com a action, faz a solicitação para a API

// axios utilizado para fazer a requisição
import axios from 'axios'

function* fetchUser(action) {
  try {
    const response = yield call(
      axios.get,
      `https://api.github.com/users/${action.payload.username}`
    )

    // Ao fazer a requisição passando o login que quer pesquisar na API, ela retorna um objeto, com todos os dados desse usuário do github

    yield put(fetchUserSuccess(response.data))

  } catch (error) {
    yield put(fetchUserFailure(error))
  }
}

function* userSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUser)
}

export default userSaga
