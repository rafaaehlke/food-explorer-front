import { Routes, Route } from 'react-router-dom'

import { Menu } from '../pages/Menu'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/menu' element={<Menu />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}
