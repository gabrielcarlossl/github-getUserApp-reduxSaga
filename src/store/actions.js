// action para disparar a solicitação para API do github, ela tem o login do usuario como parametro para buscar
// deve ser passado o type da action e o payload, que será o username a ser procurado
// Criar actions de sucesso, e de falha para se quiser enviar alguma mensagem para o usuario

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'


// ação de requisição recebe o usuario digitado no formulário la do CardUser
export const fetchUserRequest = (username) => ({
  type: FETCH_USER_REQUEST,
  payload: { username },
})

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: { user },
})

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: { error },
})
