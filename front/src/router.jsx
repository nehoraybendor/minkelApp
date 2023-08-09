import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/layout/layout"
import Home from "./components/pages/home"
import Workers from "./components/pages/workers"
import Sales from "./components/pages/sales"
import HomePage from "./components/homepage/homepage"
import Doubt from "./components/pages/doubt"
import Goals from "./components/pages/goals"
import Login from "./components/userCMS/login"
import Registred from "./guards/registred"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/landing" element={<HomePage />} />
            <Route path="/" element={<Registred><Layout /></Registred>}>
                <Route path="/workers" element={<Workers />} />
                <Route index element={<Home />} />
                {/* <Route path="/login" element={<Login/>}/> // not in use  */}
                <Route path="/sales" element={<Sales />} />
                <Route path="/doubt" element={<Doubt />} />
                <Route path="/goals" element={<Goals />} />

            </Route>
            <Route path="*" element={<h1>not found 404</h1>} />
        </Route>
    )
)