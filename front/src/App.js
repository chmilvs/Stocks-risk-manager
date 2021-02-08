import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Auth from './components/Auth/Auth'
import RiskPage from "./components/RiskPage/RiskPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import { useEffect } from 'react';
import { getProfileAC } from './redux/actionCreators/authAC';
import { useDispatch } from 'react-redux';
import PrivateRouter from './components/PrivateRouters/PrivateRouter'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfileAC())
  }, [])
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

          <PrivateRouter>
          <Route path='/riskpage'>
              <RiskPage/>
          </Route>
          <Route path='/dashboard'>
              <Dashboard/>
          </Route>
          </PrivateRouter>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
