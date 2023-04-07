// No saga importa o call que funciona para chamar uma função 
// importar o put que serve para despachar uma ação para o store

// a saga lida com a action, faz a solicitação para a API 


function* fetchUserData(action){
    try {
        const response = yield useCallback(fetch(`https://api.github.com/users/${action.payload.username}`))
        yield PushSubscription({type: 'GET_USER_DATA_SUCCESS', payload:  response.data})
    } catch (error) {
        yield PushSubscription({ type: 'GET_USER_DATA_FAILURE', error})
    }
}

function* userSaga() {
    yield takeLatest('GET_USER_DATA_REQUEST', fetchUserData)
}

export default userSaga