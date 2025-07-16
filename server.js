const express = require('express');
const app = express();
const port = 3000;

// Define one GET route at /api/user
app.get('/api/user', (req, res) => {
  res.json({ name: "Alex", id: 1 });
});

// Start server listening
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
