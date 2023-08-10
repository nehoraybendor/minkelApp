import React, { FC, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import CompleteProfile from '../components/userCMS/CompleteProfile'

interface props {
    children: React.ReactNode
}

const Registred: FC<props> = ({ children }) => {
    const auth = getAuth()
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        const unsubObserver = onAuthStateChanged(auth, async (user) => {
            if (!user) navigate('/landing')  //! turned off on test 
            const tokendata = await user?.getIdTokenResult()
            console.log(tokendata?.claims);
            
            if (!tokendata?.claims.role)(window as any).completeProfile.showModal()

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