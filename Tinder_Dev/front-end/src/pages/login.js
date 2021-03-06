import React, {useState} from 'react'
import './Login.css';
import logo from '../assets/assets/logo.svg'
import api from '../services/api'

export default function Login({history}) {
    const [username, setUsername] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await api.post('/devs', {
            username
        })

        const {_id} = response.data
        history.push(`/dev/${_id}`)

    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tindev"/>
                <input
                 placeholder="Digite seu nome no github"
                 value={username}
                 onChange={e => setUsername(e.target.value)}
                 />
                <button type="submit">Entrar</button>

            </form>


        </div>

    )
}