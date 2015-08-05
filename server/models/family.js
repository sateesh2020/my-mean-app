// grab the packages we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var familySchema = new Schema({
  name: String,
  location: String,
  members:[
    { 
    name:String
    }
   ]
});

// the schema is useless so far
// we need to create a model using it
var Family = mongoose.model('Family', familySchema);
// make this available to our users in our Node applications
module.exports = Family;