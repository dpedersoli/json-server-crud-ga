import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './views/Home'
import { Contact } from './views/Contact'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes >
    </BrowserRouter >
  );
}