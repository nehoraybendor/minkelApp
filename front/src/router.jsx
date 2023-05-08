import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from "./components/layout/layout"
import SideBar from "./components/sideBar/sideBar"
import Home from "./components/pages/home"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>} >
            <Route path="/alog" element={<SideBar/>}>
                <Route path="/alog/home" element={<Home/>}/>
            </Route>
            <Route path="*" element={<h1>not fauod 500</h1>}/>
        </Route>
    )
)