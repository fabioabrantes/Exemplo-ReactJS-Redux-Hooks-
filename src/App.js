import React,{useState,useEffect} from 'react';
import {Provider} from 'react-redux';

import store from './store';
import CourseList from './components/CourseList';

function App() {
  const [repositories,setRepositories] = useState([]);
  
  useEffect(async ()=> {
    const response = await fetch('https://api.github.com/users/diego3g/repos');
    const data = await response.json();
    setRepositories(data);
  },[]);

  useEffect(()=>{
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `você tem ${filtered.length} favorites`;
  },[repositories]);

  function hanldeFavorite(id){
    const newRepositories = repositories.map(repo=>{
      return repo.id === id ? {...repo,favorite:!repo.favorite}:repo
    });
    setRepositories(newRepositories);
  }
  
  return (
    <Provider store={store}>
    <ul>
      {repositories.map(repo=>(
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>(favorito)</span>}
          <button onClick={()=>hanldeFavorite(repo.id)}>adicionar</button>
        </li>
      ))}
    </ul>
    <CourseList />
    </Provider>
  );
}

export default App;
