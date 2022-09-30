import { Reducer } from 'redux'
import { IUsers } from './types'

const INITIAL_STATE: IUsers = {
  users: []
}

const AllUsers: Reducer<IUsers | null> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      console.log(action)
      const { user } = action.payload

      return {
        ...state,
        users: [
          ...state.users,
          user
        ]
      }
    }
    default: {
      return state
    }
  }
}

export default AllUsers