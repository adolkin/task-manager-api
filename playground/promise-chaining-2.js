require('../src/db/mongoose')
const { findByIdAndDelete } = require('../src/models/task')
const Task = require('../src/models/task')

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('608fe638021b08544c7187ae').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e);
})