import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from "./components/layout/layout"
import SideBar from "./components/sideBar/sideBar"
import Home from "./components/pages/home"
import LoggedUser from "./guards/loggedUser"
import Login from "./components/pages/Login"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>} >
            
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<LoggedUser><Home/></LoggedUser>}/>
            <Route path="/alog" element={<SideBar/>}>
            </Route>
            <Route path="*" element={<h1>not found 404</h1>}/>
        </Route>
    )
)