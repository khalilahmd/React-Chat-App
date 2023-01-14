import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<RegisterPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
