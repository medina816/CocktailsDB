import './App.css';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './router';
import { Provider } from 'react-redux';
import { store } from './pages/redux/store';

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={myRouter} />
        </Provider>
    );
}

export default App;
