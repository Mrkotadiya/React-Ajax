import React, { Component } from "react";
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
// import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  state = {
    auth: false,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  activeClassName="my-active"
                  activeSty
                  le={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{pathname: "/new-post",
                    // pathname:this.props.match.url + '/new-post',
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
            <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        <Switch>
          {/* <Route path="/new-post" component={NewPost} /> */}
          
          {this.state.auth ?<Route path="/new-post" component={NewPost} /> : null}
          <Route path="/posts/" component={Posts} /> 
          <Route render={()=> <h1>Not Found</h1>} /> 
          {/* <Route path="/posts/" component={Posts} /> */}
          {/* <Redirect fro m="/" to="/posts" /> */}
        </Switch>
      </div> 
    );
  }
}

export default Blog;
