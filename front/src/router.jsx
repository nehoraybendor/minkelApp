import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import HeaderLine from "./components/header/headerLine"
import SideBar from "./components/sideBar/sideBar"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<HeaderLine/>} >
            <Route path="/alog" element={<SideBar/>}></Route>
        </Route>
    )
)