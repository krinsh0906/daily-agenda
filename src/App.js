import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './login'
import './login.css'


// import './login.css';

import Home from "./pages/home";
import Todo from "./pages/todo";


// import './App.css';
// import Addtask from './addtask';
// import './addtask.css'
function App() {
  return (
    <div className="App">


      

      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/login' element={<Login/>}/>


        </Routes>
      </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
