const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get gurukulas linked to a mentor (temporarily using mentor_id = 1)
router.get('/gurukulas', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT g.id, g.name
       FROM gurukulas g
       JOIN mentor_gurukulas mg ON g.id = mg.gurukula_id
       WHERE mg.mentor_id = $1`,
      [1] // hardcoded mentor ID for now
    );

    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching gurukulas:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
