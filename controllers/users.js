
const users = require('../data/index')
//"require" stack allows me to bring other files or node modules/packages
const newUser = require('../data/sampleUser')

const ListallUsers = (req, res) => {
    res.json(users)
}
//name of the function "GetUserbyId"
const GetUserbyId = (req, res) => {
    //FoundUser is variable              //"req" is Data im sending// .params referring to URL  is requesting ".ID" is the place holder i defined in route 
    const FoundUser = users.some(user => user.id == req.params.id)
    if (FoundUser) {
        //res.send " sends the HTTP response/sends message to postman"
        res.send(users.filter(user => user.id == req.params.id))
        //what to do if i find user
    }
    //else statement if i dont find the user....basically the "error handling"
    else {                  //
        res.status(404).json({ message: 'user not found' })

    }

}

const addUserToArray = (req, res) => {
    //pushing the new user into the users array
    users.push(newUser)

    res.json(users)
}

const updateUserById = (req, res) => {
    const FoundUser = users.some(user => user.id == req.params.id)
    if (FoundUser) {


        const updatedUser = users.filter(user => user.id == req.params.id)
        console.log(updatedUser[0].name)
        updatedUser[0].name = req.body.name
        res.json(updatedUser)
    }
    else {
        res.status(400).send("notfound")
    }
}

const deleteUser = (req, res) => {
    const FoundUser = users.some(user => user.id == req.params.id)
    
   if (FoundUser) {
    const itemIndex = users.findIndex(({ id }) => id === req.params.id);
    
    }
    else {
        res.status(404).json({ message: 'user not found' })

    }
}


    module.exports = { ListallUsers, GetUserbyId, addUserToArray, updateUserById, deleteUser }

