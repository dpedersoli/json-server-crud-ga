//esse arquivo serve para ser referência do Store
import AllUsers from './modules/user/reducer'
import { createStore } from 'redux'

const store = createStore(AllUsers);

export default store;