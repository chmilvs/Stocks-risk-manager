import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import MainPage from './components/MainPage/MainPage'
import Auth from './components/Auth/Auth'
import RiskPage from "./components/RiskPage/RiskPage";
import Dashboard from "./components/Dashboard/Dashboard";
import UpdateForm from './components/Dashboard/UpdaitingForm/UpdaitingForm';
import Footer from "./components/Footer/Footer";
import {useEffect} from 'react';
import {getProfileAC} from './redux/actionCreators/authAC';
import {useDispatch} from 'react-redux';
import PrivateRouter from './components/PrivateRouters/PrivateRouter'
import ChatWindow from "./components/ChatWindow/ChatWindow";
// import io from "socket.io-client";
// const socket = io('http://localhost:8080/')


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAC());
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route path="/chat/">
          <ChatWindow/>
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <PrivateRouter>
          <Route path="/riskpage">
            <RiskPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/update">
              <UpdateForm />
            </Route>
        </PrivateRouter>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
