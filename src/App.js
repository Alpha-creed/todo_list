import './App.css';
import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EditPage from './Components/EditPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/edit/:id" element={<EditPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
