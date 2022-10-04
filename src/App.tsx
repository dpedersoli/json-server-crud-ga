import { AppRoutes } from './routes'

import { Provider } from 'react-redux'

import { ToastContainer } from 'react-toastify';

import store from './store'

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <AppRoutes />
      </Provider>
    </>
  )
}

export default App
