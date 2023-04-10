// O reducer vai lidar com a resposta da API, ele vai escutar as actions e atualizar o estado do APP

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './actions'

const initialState = {
  user: null,
  isLoading: false,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, isLoading: true }
    case FETCH_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload.user }
    case FETCH_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error }
    default:
      return state
  }
}

export default userReducer
