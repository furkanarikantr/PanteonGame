import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardLayout from './Layouts/DashboardLayout'
import LoginLayout from './Layouts/LoginLayout'
import BuildPage from './Pages/BuildPage'
import ErrorPage from './Pages/ErrorPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

import { Navigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='notfound' element={<ErrorPage />} />
          <Route path='*' element={<Navigate to='/notfound' replace />} />
        </Route>
        <Route path='/build' element={<DashboardLayout />}>
          <Route index element={<BuildPage />} />
          <Route component={<ErrorPage />} />
          <Route path='*' element={<Navigate to='/notfound' replace />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
