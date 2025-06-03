import React, { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка загрузки');
        return res.json();
      })
      .then(setPosts)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
