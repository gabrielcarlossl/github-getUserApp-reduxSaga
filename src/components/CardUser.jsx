import React, { useState } from "react"

// deve usar o useDispatch e useSelector para utilizar a função de fazer requisição
import { useDispatch, useSelector } from 'react-redux'

import { fetchUserRequest } from '../store/actions'

import './cardUser.css'

const CardUser = () => {

    const [username, setUsername] = useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const isLoading = useSelector((state) => state.isLoading)
    const error = useSelector((state) => state.error)

    // a função vai receber o username que foi digitado no formulario, e enviará ele como paramentro na ação que faz a requisição da api
    // a ação que  está no arquivo actions
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchUserRequest(username))
    }

    return (

        <div className='container'>
            <h1>Procure um usuário:</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='input-search'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button className='btn-search' type="submit">Buscar</button>
            </form>
            {isLoading && <p>Carregando...</p>}
            {error && (
                <p>
                    Ocorreu um erro:{" "}
                    {error.message === "Request failed with status code 404"
                        ? "Usuário não encontrado"
                        : error.message}
                </p>
            )}
            {user && (
                <div className='userInfo'>
                    <hr className='hr' />
                    <img className='avatar' src={user.avatar_url} alt={user.login} width="80" height="80" />
                    <h2>Nome: {user.name}</h2>

                    {user.name ? (
                    <div className='login'>
                        <h3>Login:</h3>
                        <p>{user.login}</p>
                    </div>
                    ) : (<div></div>)}
                    

                    {user.company ? (
                    <div>
                        <h3>Empresa: </h3> 
                        <p>{user.company}</p> 
                    </div>
                    ) : (<div></div>)}
                    
                    {user.location ? (
                    <p>Local: {user.location}</p>
                    ) : (<div></div>)}
                </div>
            )}
        </div>
    )
}

export default CardUser
