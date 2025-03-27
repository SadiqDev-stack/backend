
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let posts = [
  { id: 1, title: 'Post 1', content: 'This is post 1' },
  { id: 2, title: 'Post 2', content: 'This is post 2' },
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    res.json(post);
  }
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    const { title, content } = req.body;
    post.title = title;
    post.content = content;
    res.json(post);
  }
});

app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    posts.splice(index, 1);
    res.json({ message: 'Post deleted successfully' });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

