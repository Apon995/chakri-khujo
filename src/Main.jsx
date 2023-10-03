import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx'
import Applied from './Components/Applied.jsx';
import App from '../src/App.jsx'
import NotFound from './Components/NotFound.jsx';
import '../src/Styles/Main.css';
import DetailsPage from './Components/DetailsPage.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => {
                    try {
                        const response = await fetch('/Data.json');
                        const data = await response.json();
                        return data;
                    }
                    catch(error){
                        console.log(error); 
                    }

                }
            },
            {
                path : '/Home/:id',
                element : <DetailsPage />,
                loader : ()=> fetch('/Data.json')
                    
                ,

            },
            {
                path: '/AppliedJobs',
                element: <Applied />,
                loader : ()=> fetch('/Data.json')
            },
            
        ]
    }
]

)





ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)