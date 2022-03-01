const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  description: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  category: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
  },
  paid: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("record", RecordSchema);
