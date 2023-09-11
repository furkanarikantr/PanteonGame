import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardLayout from './Layouts/DashboardLayout'
import LoginLayout from './Layouts/LoginLayout'
import BuildPage from './Pages/BuildPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
        <Route path='/build' element={<DashboardLayout />}>
          <Route index element={<BuildPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
