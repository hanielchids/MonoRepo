import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Post from "./Pages/Post";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/createPost"> Create a post</Link>
          <Link to="/"> Home Page</Link>
          <Link to="/login"> Login</Link>
          <Link to="/registration"> Registration</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createPost" exact component={CreatePost} />
          <Route path="/post/:id" exact component={Post} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
