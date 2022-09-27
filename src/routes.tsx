import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoutes } from '../private.routes';

import { Home } from './views/Home'
import { Courses } from './views/Courses'
import { SignUp } from './views/SignUp'
import { SignIn } from './views/SignIn'
import { Dashboard } from './views/Dashboard'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* p/ autenticação (abaixo) */}
        {/* <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
      </Routes >
    </BrowserRouter >
  );
}