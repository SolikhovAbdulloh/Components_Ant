import { createBrowserRouter } from "react-router-dom"
import App from "../App"

export const root = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    }
])
