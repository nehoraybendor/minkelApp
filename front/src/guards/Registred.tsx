import React, { FC, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import CompleteProfile from '../components/userCMS/CompleteProfile'
import { useDispatch } from 'react-redux'
import { setToken, setTokenData } from '../redux/slice/user.slice'

interface props {
    children: React.ReactNode
}

const Registred: FC<props> = ({ children }) => {
    const auth = getAuth()
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(() => {
        setLoading(true)
        const unsubObserver = onAuthStateChanged(auth, async (user) => {
            if (!user) navigate('/landing')
            if (location?.state?.refresh === "refresh"){
                await user?.getIdTokenResult(true)
            }
            const tokendata = await user?.getIdTokenResult()
            const token = await user?.getIdToken()
            console.log(tokendata);
            if (!tokendata?.claims.fullName) window.completeProfile.showModal()
            dispatch(setTokenData(tokendata))
            dispatch(setToken(token))
            setLoading(false)
        })
        return () => unsubObserver();
    }, [auth])


    return (
        <>
            <CompleteProfile />
            {loading ? <div>loading...</div> : children}
        </>

    )
}

export default Registred