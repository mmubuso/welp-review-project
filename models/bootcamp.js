/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const BootcampSchema = new mongoose.Schema({
 name: String,
 location: String,
 courses: [
   {
     name: String,
     cost: Number,
     immersive: Boolean
   }
 ]
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const BootcampCollection = mongoose.model('Bootcamp', BootcampSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

 //Get all Bootcamps
function getBootcamps() {
  return BootcampCollection.find()
}



/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getBootcamps
}
