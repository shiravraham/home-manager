const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  cost: {
    type: Number,
  },
  currency: {
    type: String,
  },
  shir_avraham: {
    type: String,
  },
  shaked_hadas: {
    type: String,
  },
});

module.exports = mongoose.model("record", RecordSchema);
