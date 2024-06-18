
import './App.scss';
import Header from './components/Header/Header';
import { Outlet, Link } from 'react-router-dom';
const App = () => {
  return (
    <div className="app-container">
      <div className='main-header'>
        <Header />
      </div>
<div className='main-container'>
<div className='sidenav-container'></div>
<div className='main-content'>
  <Outlet />
</div>
</div>

    </div>
  );
}

export default App;
