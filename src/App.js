import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Action from './components/Dashboard/Action/Action';
import AllAction from './components/Dashboard/Action/AllAction';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='allaction' element={<AllAction />}>

          </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
