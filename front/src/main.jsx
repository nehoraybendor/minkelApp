import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { firebaseConfig } from './FB/config'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import BasicLoading from './components/LoadingScreen/BasicLoading'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ErrorReload from './components/dialogs/errorReload'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store} >
    <RouterProvider router={router} />
    <ErrorReload />
</Provider>
)
