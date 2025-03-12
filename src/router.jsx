import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage';
import Layout from './components/Layout/Layout';
import Alphabet from './pages/Alphabet/Alphabet';
import AlphabetPage from './pages/AlphabetPage/AlphabetPage';
import Money from './pages/Money';
import CoctailInfo from './pages/CocktailInfo/CocktailIfo';

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
    {
         path: '/', 
         element: <Home /> 
        },
    { 
        path: '/search/:letter',
         element: <SearchPage /> 
        },
        { 
            path: '/alphabet',
             element: <Alphabet/> 
            },
        { 
            path: '/alphabet/:letter',
             element: <AlphabetPage /> 
            },
            { 
                path: 'money',
                 element: <Money /> 
                },
              
                 { 
                    path: 'cocktailInfo/:id',
                    element: <CoctailInfo /> 
                },
        ]
    }
]);
