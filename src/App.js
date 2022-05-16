import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const URL = 'http://localhost:8088/';

  const fetchMovies = async () => {
    const res = await fetch(`${URL}api/movie/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
    return await res;
  };

  const fetchTVs = async () => {
    const res = await fetch(`${URL}api/tv/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
    return await res;
  };

  const fetchData = () => {
    fetchMovies();
    fetchTVs();
  }

  const addData = async () => {
    const res = await fetch(`${URL}api/add`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
    return await res;
  };
    
  const deleteData = async () => {
    const res = await fetch(`${URL}api/delete`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
    return await res;
  };
  

  const dropTable = async () => {
    const res = await fetch(`${URL}api/drop`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
    return await res;
  };

  return (
    <div className='App'>
      <button className='button' onClick={deleteData}>Truncate table</button>
      <button className='button' onClick={dropTable}>Drop table</button>
      <button className='button' onClick={addData}>Add data</button>
      <button className='button' onClick={fetchData}>
        Get request
      </button>
    </div>
  );
}

export default App;
