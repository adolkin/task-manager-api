require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('608fb2a90f0fdb3b381c9d7b').then((task) => {
  console.log(task)
  return Task.countDocuments({ completed: false })
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})