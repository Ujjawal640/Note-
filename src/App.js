import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Singup from './components/Singup';
import {Addinganote} from './components/Addinganote';



function App() {
  return (
    <div >
    <NoteState>
      <Router>
        
    
        <div >
          <Switch>
            <Route exact path="/">
            <Login/>
            </Route>
         
            <Route exact path="/Addinganote">
              <Addinganote/>
            </Route>
            
            
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/signup">
           <Singup/>
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  </div>
  );
}

export default App;
