// action para disparar a solicitação para API do github, ela tem o login do usuario como parametro para buscar 
// deve ser passado o type da action e o payload, que será o username a ser procurado

export const getUserData = (username) => ({
    type: 'GET_USER_DATA_REQUEST',
    payload: {username}
})