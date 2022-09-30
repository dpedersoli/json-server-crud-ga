import { IUser } from './types'

export const addNewUser = (user: IUser) => {

  return {
    //está tudo em UPPERCASE para determinar que se trata de uma Reducer
    type: 'ADD_USER',
    payload: user
  }
}