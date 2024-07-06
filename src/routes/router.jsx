import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Detail from './Detail';
import Characters from './Characters';
import HaveAProblem from '../components/HaveAProblem';
import MyFavorite from './MyFavorite';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Characters />,
      },
      {
        path: '/character/:id',
        element: <Detail />,
      },
      {
        path: 'myfav',
        element: <MyFavorite />,
      },
    ],
    errorElement: <HaveAProblem />,
  },
]);

export default router;
