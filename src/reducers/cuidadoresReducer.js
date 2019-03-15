import { ADD_CUIDADOR } from '../constants'
import cuidadores from '../cuidadores.json'
const initialState = cuidadores

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CUIDADOR:
      return [...state, action.payload]
    default:
      return state
  }
}
