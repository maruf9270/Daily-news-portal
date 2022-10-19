import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,

        // This is the children routes for main layout
        children:[
            // This is home route
            {

            },

            {

            },

        ]
    }
])