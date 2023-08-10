import React, { FC, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import CompleteProfile from '../components/userCMS/CompleteProfile'
import { useDispatch } from 'react-redux'
import { setTokenData } from '../redux/slice/user.slice'

interface props {
    children: React.ReactNode
}

const Registred: FC<props> = ({ children }) => {
    const auth = getAuth()
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        const unsubObserver = onAuthStateChanged(auth, async (user) => {
            if (!user) navigate('/landing')  
            const tokendata = await user?.getIdTokenResult(false)
            
            console.log(tokendata?.claims);
            
            if (!tokendata?.claims.fullName)(window as any).completeProfile.showModal()
            dispatch(setTokenData(tokendata))
                setLoading(false)
        })
        return () => unsubObserver();
    }, [auth])


    return (
        <>
        <CompleteProfile/>
            {loading ? <div>loading...</div> : children}
        </>

    )
}

export default Registred