import store from './store'
import { addTask, removeTask } from './action'

const unSubscribe = store.subscribe(() => {
  console.log('Store Updated: ', store.getState())
})

store.dispatch(addTask('Task 1'))
store.dispatch(addTask('Task 2'))

console.log(store.getState(), ' - Mujhe toh forcefully run kiya gaya!');

unSubscribe()

store.dispatch(removeTask(1))
console.log(store.getState());
