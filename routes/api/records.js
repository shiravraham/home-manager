const express = require("express");
const router = express.Router();
const Record = require("../../models/Record");

router.post("/", async (req, res) => {
  const records = req.body;

  try {
    const insertedRecords = await Record.insertMany(
      records.map((record) => new Record(record))
    );

    res.json(insertedRecords);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
