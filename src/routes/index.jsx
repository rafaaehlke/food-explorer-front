import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'
import { ClienteRoutes } from './cliente.routes'
import { USER_ROLE } from '../utils/roles'



export function Routes() {
  const { user } = useAuth();

  function AcessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.CLIENTE:
        return <ClienteRoutes />
      default:
        return <ClienteRoutes />
    }
  }
  return (
    <BrowserRouter>
      {user ? <AcessRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}