import store from './store/configureStore'
import { addTask, removeTask, completeATask } from './store/tasks'

const unSubscribe = store.subscribe(() => {
  console.log('Store Got Updated: ', store.getState())
})

store.dispatch(addTask('Task 1'))
store.dispatch(addTask('Task 2'))
store.dispatch(removeTask(1))
store.dispatch(completeATask(2))

