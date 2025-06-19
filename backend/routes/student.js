const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get students by Gurukula ID
router.get('/gurukulas/:id/students', async (req, res) => {
  const gurukulaId = req.params.id;

  try {
    const result = await pool.query(
      'SELECT id, name, level, photo_url FROM students WHERE gurukula_id = $1',
      [gurukulaId]
    );

    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
