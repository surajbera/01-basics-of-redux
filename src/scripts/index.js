import store from './store/configureStore'
import { addTask, removeTask, completeATask } from './store/tasks'

const unSubscribe = store.subscribe(() => {
  console.log('Store Got Updated: ', store.getState())
})

store.dispatch(addTask({ task: 'Task 1' }))
store.dispatch(addTask({ task: 'Task 2' }))
store.dispatch(removeTask({ id: 1 }))
store.dispatch(completeATask({ id: 2 }))

