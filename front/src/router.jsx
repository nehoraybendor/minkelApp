import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from "./components/layout/layout"
import Home from "./components/pages/home"
import Workers from "./components/pages/workers"
import Sales from "./components/pages/sales"
import HomePage from "./components/homepage/homepage"
import Doubt from "./components/pages/doubt"
import Goals from "./components/pages/goals"
import Login from "./components/userCMS/login"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"  >
            <Route path="/" element={<HomePage/>}/>
            <Route path="/minkel" element={<Layout/>}>
                <Route path="/minkel/home" element={<Home/>}/>
                <Route path="/minkel/login" element={<Login/>}/>
                <Route path="/minkel/workers" element={<Workers/>}/>
                <Route path="/minkel/sales" element={<Sales/>}/>
                <Route path="/minkel/doubt" element={<Doubt/>}/>
                <Route path="/minkel/goals" element={<Goals/>}/>
                
            </Route>
            <Route path="*" element={<h1>not found 404</h1>}/>
        </Route>
    )
)