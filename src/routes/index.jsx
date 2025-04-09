import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { PagePrato } from '../pages/PagePrato'
import { EditPrato } from '../pages/EditPrato'



export function Routes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
   
      <EditPrato />
     {/* { user ? <AppRoutes /> : <AuthRoutes />} */}
    </BrowserRouter>
  )
}