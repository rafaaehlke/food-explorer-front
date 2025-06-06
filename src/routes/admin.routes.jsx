import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { PagePrato } from '../pages/PagePrato'
import { NewPrato } from '../pages/NewPrato'
import { EditPrato } from '../pages/EditPrato'
import { Profile } from '../pages/Profile'
import { NotFound } from '../pages/NotFound'



export function AdminRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/prato/:id' element={<PagePrato />} />
      <Route path='/newPrato' element={<NewPrato />} />
      <Route path='/editPrato/:id' element={<EditPrato />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' exact={true} element={ <NotFound />}/>

    </Routes>
  )
}
