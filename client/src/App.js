import Landing from "./Pages/Landing";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Error from './Pages/Error';
import Register from './Pages/Register';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
