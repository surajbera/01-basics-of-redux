/* Action Types */
export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const COMPLETE_A_TASK = 'COMPLETE_A_TASK'

/* Actions */
export const addTask = (task) => {
  return { type: ADD_TASK, payload: { task } }
}

export const removeTask = (id) => {
  return { type: REMOVE_TASK, payload: { id } }
}

export const completeATask = (id) => {
  return { type: COMPLETE_A_TASK, payload: { id } }
}

/* Reducer */
let id = 0

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ]

    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id)

    case COMPLETE_A_TASK:
      return state.map(task => task.id === action.payload.id ? {
        ...task,
        completed: true
      } : task)

    default:
      return state
  }
}
