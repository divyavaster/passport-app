const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Passport App Backend Running...');
});

// CREATE user
app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, name, email, password });
    }
  );
});

// READ all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// READ single user
app.get('/users/:id', (req, res) => {
  db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// UPDATE user
app.put('/users/:id', (req, res) => {
  const { name, email, password } = req.body;
  db.query(
    'UPDATE users SET name=?, email=?, password=? WHERE id=?',
    [name, email, password, req.params.id],
    (err) => {
      if (err) throw err;
      res.json({ message: 'User updated successfully' });
    }
  );
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  db.query('DELETE FROM users WHERE id=?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'User deleted successfully' });
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
