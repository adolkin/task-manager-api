require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('608ff10ef6108d45508871e1', { age: 1 }).then((user) => {
  console.log(user)
  return User.countDocuments({ age: 1 })
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})