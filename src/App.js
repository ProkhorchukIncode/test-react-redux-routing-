import { Route, Routes, Navigate } from "react-router-dom";

import HomeView from "./Views/HomeView";
import AboutView from "./Views/AboutView";

function App() {
  return (
      <Routes>
        <Route path='/home' element ={<HomeView/>}/>
        <Route path='/about' element ={<AboutView/>}/>
        <Route path='*' element ={<Navigate replace to='/home'/>}/>
      </Routes>
  );
}

export default App;
