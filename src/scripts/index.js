import store from './store'
import { addTask, completeATask } from './action'

const unSubscribe = store.subscribe(() => {
  console.log('Store Got Updated: ', store.getState())
})

store.dispatch(addTask('Task 1'))
store.dispatch(addTask('Task 2'))

store.dispatch(completeATask(1))
