import * as actionTypes from './actionTypes'

export const addTask = (task) => {
  return { type: actionTypes.ADD_TASK, payload: { task } }
}

export const removeTask = (id) => {
  return { type: actionTypes.REMOVE_TASK, payload: { id } }
}

export const completeATask = (id) => {
  return { type: actionTypes.COMPLETE_A_TASK, payload: { id } }
}