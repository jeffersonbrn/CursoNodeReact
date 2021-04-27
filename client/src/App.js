import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Go back home</Link>
          <Link to="/CreatePost">Create a Post</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/CreatePost" exact component={CreatePost} />
          <Route path="/post/:id" exact component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
