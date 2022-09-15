import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoute } from '../private.routes';

import { Home } from './views/Home'
import { Contact } from './views/Contact'
import { SignUp } from './views/SignUp'
import { SignIn } from './views/SignIn'
import { Dashboard } from './views/Dashboard'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes >
    </BrowserRouter >
  );
}