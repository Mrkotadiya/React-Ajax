import React, { Component } from "react";
import "./NewPost.css";
import axios from 'axios';

class NewPost extends Component {

  state = {
    title: "",
    content: "",
    author: "Rabidranath Tagor",
  };

  postDataHandler = ()=>{
    const data= {
      title:this.state.title,
      body:this.state.body,
      author:this.state.author
    }
    axios.post('https://jsonplaceholder.typicode.com/posts/',data)
    .then(response=>{
      console.log(response);
    })
    .catch(error=>{
      console.log(error);
    });
  }
  
  render() {
    return (
      <div className="NewPost">
        <h1>Add The Post</h1>
        <p>Title</p>
        <input type="text" value={this.state.value} onChange={(event) => this.setState({ title: event.target.value })}/>
        <p>Content</p>
        <textarea rows="4" value={this.state.value} onChange={(event) => this.setState({ content: event.target.value })}></textarea>
        <p>Author</p>
        <select value={this.state.value} onChange={(event) => this.setState({ author: event.target.value })}>
          <option value="Rabindranath">Rabindranath Tagore</option>
          <option value="Chetan">Chetan Bhagat</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
