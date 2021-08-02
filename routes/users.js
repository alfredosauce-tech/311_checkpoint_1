const express = require('express');
const router = express.Router()
const controller = require('../controllers/users')

                   //bringing the controller file so you can make use of the controller
router.get('/users',controller.ListallUsers)
    // perform some logic
   // ":" declaring placeholder "id" name of placeholder
 router.get('/users/:id',controller.GetUserbyId)

router.post('/users',controller.addUserToArray)

router.put('/users/:id',controller.updateUserById)

 router.delete('/users/:id',controller.deleteUser)

 module.exports = router