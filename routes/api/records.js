const express = require("express");
const router = express.Router();
const Record = require("../../models/Record");

router.post("/", async (req, res) => {
  console.log(req);

  try {
    const {
      date,
      description,
      category,
      cost,
      currency,
      shir_avraham,
      shaked_hadas,
    } = req.body;
    const newRecord = new Record({
      date,
      description,
      category,
      cost,
      currency,
      shir_avraham,
      shaked_hadas,
    });

    const record = await newRecord.save();

    res.json(record);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
