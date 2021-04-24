import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/CreatePost">Create a Post</Link>
        <Link to="/">Go back home</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/CreatePost" exact component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
