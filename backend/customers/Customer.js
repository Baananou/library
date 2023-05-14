const { model, Schema } = require("mongoose");
const customerSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  createdAt:String
});
module.exports = model("Customer", customerSchema);
