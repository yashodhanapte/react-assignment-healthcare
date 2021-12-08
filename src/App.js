import './App.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home/HomeContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
            <Redirect to="/" />
      </Router>
    </div>
  );
}

export default App;
