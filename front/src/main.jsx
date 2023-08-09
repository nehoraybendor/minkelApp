import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { firebaseConfig } from './FB/config'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
