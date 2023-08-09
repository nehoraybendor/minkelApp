import React, { FC, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
interface props {
    children: React.ReactNode
}
const Registred: FC<props> = ({ children }) => {
    const auth = getAuth()
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (!user) navigate('/landing')
            setLoading(false)
        })
    }, [auth])
    return (
        <>
            {loading ? <div>loading...</div> : children}
        </>

    )
}

export default Registred