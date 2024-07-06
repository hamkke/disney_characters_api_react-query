import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Outlet />
    </div>
  );
};
export default App;
