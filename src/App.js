import React, { useState } from "react";
import './App.css';
import Navbar from "./Navbar";
import Input from "./Input";
import Post from "./Post";



var id = 1;

function App() {
  const [posts, setPosts] = useState([]);
 

  function addPost(title){
    const newPost = {id, title };
    setPosts([newPost, ...posts])
    id += 1;
  }
  function deletePost(id) {
    const updatedPosts = posts.filter((post)=> post.id != id);
    setPosts(updatedPosts);

  }
  console.log(App);
  return (
    <div className="App">
      <Navbar />
      <Input  addPost={addPost}/>
      {posts.map((posts)=> <Post key={posts.id} id={posts.id} title={posts.title} deletePost={deletePost}/>)}
    </div>
    
  );
  
}

export default App;
