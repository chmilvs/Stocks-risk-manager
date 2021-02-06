import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Auth from './components/Auth/Auth'
import RiskPage from "./components/RiskPage/RiskPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

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

          <Route path='/riskpage'>
              <RiskPage/>
          </Route>

          <Route path='/dashboard'>
              <Dashboard/>
          </Route>

      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
