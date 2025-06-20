import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => {
        if (!res.ok) throw new Error(t('fetch_error'))
        return res.json()
      })
      .then(setPosts)
      .catch((err) => setError(err.message))
  }, [t]) // добавлен t в зависимости, чтобы текст ошибки локализовался при смене языка

  return (
    <div>
      <h1>{t('home')}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
