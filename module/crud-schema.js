const { Schema, model } = require("mongoose");

const CrudSchema = new Schema({
     rasm: {
          type: String,
          required: true,
     },
     nomi: {
          type: String,
          required: true,
     },
   
     soni: {
          type: Number,
          required: true,
     },
     narxi: {
          type: Number,
          required: true,
     },
 
});

module.exports = model("CrudSchema ", CrudSchema);
