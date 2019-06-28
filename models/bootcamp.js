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
  name: {
    type: String,
    required: true
  },
  location: {
    type:String,
    required: true
   },
  courses: Array
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

//Get a specific bootcamp
function getOneBootcamp(bootcampId){
  return BootcampCollection.findById(bootcampId)
}

//Add a new bootcamp 
function createBootcamp(bootcampObject){
  return BootcampCollection.create(bootcampObject)
}

//Update a bootcamp based on the id
function updateBootcamp(bootcampId,bootcampObject){
  return BootcampCollection.findByIdAndUpdate(bootcampId,bootcampObject)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getOneBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp
}
