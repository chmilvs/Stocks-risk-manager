import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import AuthForm from './components/AuthForm/AuthForm'
import RiskPage from "./components/RiskPage/RiskPage";
import Dashboard from "./components/Dashboard/Dashboard";

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

          <Route path='/riskpage'>
              <RiskPage/>
          </Route>

          <Route path='/dashboard'>
              <Dashboard/>
          </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
