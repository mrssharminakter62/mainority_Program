import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Incubator from './Components/Incubator/IncubatorOne/Incubator';
import Main from './Components/Incubator/Main/Main';
import FeatureDetails from './Components/Incubator/FeatureDetails/FeatureDetails';
import LearnPage from './Components/Learn/LearnPage/LearnPage';
import FundStartup from './Components/FundStartup/FundStartup';
import Lpage from './Components/Learn/LearnPages/Lpage';



function App() {
  return (
    <Router>  
      <Header/>
      <Switch>
      <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/incubator">
         <Main/>
        </Route>
        <Route path="/learn">
         <Lpage/>
        </Route>
        <Route path="/mangoswap/:id">
          <FeatureDetails/>
        </Route>
        <Route path="/startup">
          <FundStartup/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
