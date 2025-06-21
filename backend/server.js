const express = require('express');
const app = express();
//const PORT = 3000;

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const authRoutes = require('./routes/auth');
const gurukulaRoutes = require('./routes/gurukula');
const studentRoutes = require('./routes/student');
app.use('/api', studentRoutes);

app.use('/api', gurukulaRoutes);

app.use(express.json());
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Mentormate backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});