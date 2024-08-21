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
          type: String,
          required: true,
     },
     narxi: {
          type: String,
          required: true,
     },
 
});

module.exports = model("CrudSchema ", CrudSchema);
