import React, { useEffect } from 'react'
import { MY_BASE_URL, TOKEN_KEY_NAME } from '../const'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const LoggedUser = ({ children }) => {
    const token = localStorage.getItem(TOKEN_KEY_NAME)
    const navigate = useNavigate()
    
    const checkToken = async (token) => {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://'+MY_BASE_URL+"/users/authMe/",
                headers :{
                    'x-api-key': token,
                },
            })
            return response
        } catch (error) {
            console.log(error.response.status);
            if (error.response.status === 401) {
                console.log('token invalid !');
            }
            navigate('/login')
            console.log(error)
            return null;
        }
    }

    useEffect(() => {
        console.log(token);
        if (!token) navigate("/login")
        const checkedToken = checkToken(token)
        console.log(checkedToken);
        if (!checkedToken) navigate("/login")
    }, [])


    return (
        <div>{children}</div>
    )
}

export default LoggedUser