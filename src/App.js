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
import Progress from './Components/Learn/Progress/Progress';
import AnalysProgress from './Components/Learn/Progress/AnalysProgress';
import Tutorial from './Components/Learn/Progress/Tutorial';
import FeatureCourse from './Components/Learn/FeatureCoure/FeatureCourse';
import WelCome from './Components/Learn/WelCome/Welcome';
import InvestDirectly from './Components/Incubator/Feature/Feature';


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
        <Route path="/learn/">
         <Lpage/>
        </Route>
        <Route path="/view">
         <InvestDirectly/>
        </Route>
        <Route path="/more/:id">
            <WelCome />
          </Route>
        <Route path="/mangoswap/:id">
          <FeatureDetails/>
        </Route>
        <Route path="/startup">
          <FundStartup/>
        </Route>
        <Route path="/progress/:id">
         <Progress/>
        </Route>
        <Route path="/progressAnalysis/:id">
            <AnalysProgress />
        </Route>
        <Route path="/tutorial">
         <Tutorial/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
