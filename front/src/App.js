import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import AuthForm from './components/AuthForm/AuthForm' 

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>

      <Route exact path='/'>
      <Banner/>
      </Route>

      <Route path='/auth'>
      <AuthForm/>
      </Route>
 
      </Switch>

    </BrowserRouter>
  );
}

export default App;
