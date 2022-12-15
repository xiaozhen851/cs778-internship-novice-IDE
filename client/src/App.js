import Landing from "./Pages/Landing";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Error from './Pages/Error';
import Register from './Pages/Register';
import ProtectedRoute from "./Pages/ProtectedRoute";
import { IDEPage, Profile, SharedLayout } from "./Pages/Dashboard.js";

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<ProtectedRoute><SharedLayout></SharedLayout></ProtectedRoute>}>
          <Route index element = {<IDEPage></IDEPage>}></Route>
          <Route path = "ide" element = {<IDEPage></IDEPage>}></Route>
          <Route path = "profile" element = {<Profile></Profile>}></Route>
          <Route path = "question" element = {<div>Problem</div>}></Route>
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
