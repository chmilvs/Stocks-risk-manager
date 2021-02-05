import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Auth from './components/AuthForm/Auth'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>

      <Route exact path='/'>
      <Banner/>
      </Route>

      <Route path='/auth'>
      <Auth/>
      </Route>
 
      </Switch>

    </BrowserRouter>
  );
}

export default App;
