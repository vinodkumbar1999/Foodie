import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login";
import SignUp from "./components/signUp";

import Homeportal from "./components/homePortal";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/*" element={<Homeportal/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
