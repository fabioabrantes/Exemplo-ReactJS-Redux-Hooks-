import React,{useEffect,useState} from 'react';
import PostItem from '../PostItem';

function PostList() {
  const [posts,setPosts] = useState([]);
  const [newpost,setNewPost] = useState('');

  useEffect(async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data);
  },[]);
  return (
    <>
      <br />
      <input type="text" onChange={e=>setNewPost(e.target.value)} value={newpost}/>
      <ul>
        {posts.map(post=><PostItem key={post.id} post={post}/>)}
      </ul>
    </>
  );
}

export default PostList;