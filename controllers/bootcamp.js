/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const bootcampApi = require('../models/bootcamp.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const bootcampRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

//Get an entire list of all bootcamps
bootcampRouter.get('/', (req, res) => {
  bootcampApi.getBootcamps()
    .then(bootcamps => {
      res.send(bootcamps)
    })
})

//Get exactly one bootcamp
bootcampRouter.get('/:bootcampId',(req,res) => {
  bootcampApi.getOneBootcamp(req.params.bootcampId)
    .then(bootcamp => {
      res.send(bootcamp)
    })
})

//Create a new bootcamp object
bootcampRouter.post('/',(req,res) => {
  bootcampApi.createBootcamp(req.body)
    .then(bootcamp => {
      res.send('A new bootcamp has been created')
    })
})

 
/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  bootcampRouter
}
