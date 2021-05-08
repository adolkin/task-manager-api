const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port);
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('6095f347e34f96478442deeb')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('6095f0aa51a8c124e8b3f1e1')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)

}

main()