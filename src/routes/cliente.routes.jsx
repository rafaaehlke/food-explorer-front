import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { PagePrato } from '../pages/PagePrato'
import { Profile } from '../pages/Profile'
import { NotFound } from '../pages/NotFound'



export function ClienteRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/prato/:id' element={<PagePrato />} />
      <Route path='/profile' element={<Profile />} />    
      <Route path='*' exact={true} element={ <NotFound />}/>

    </Routes>
  )
}
