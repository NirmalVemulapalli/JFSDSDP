import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Datafetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  const handleSearch = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    handleSearch();
  }, [id]);

  return (
    <div>
      <label htmlFor="searchInput">Search:</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type='text'
          id='searchInput'
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder='Enter post ID'
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleSearch} style={{ padding: '5px', cursor: 'pointer' }}>
          Search
        </button>
      </div>
      <p>{posts.title}</p>

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Datafetch;
