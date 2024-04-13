import Root from './Root'
import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from './Home'
import Article from './Article'


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root />,
        children : [
            {
                path:'/',
                element : <Home />
            },
            {
                path:'/articles',
                element: <Article />
            }
        ]

    }
])

export default router
