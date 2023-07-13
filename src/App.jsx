import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login.pages';
import { HomePage } from './pages/Home/Home.pages';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<><p>Página não existe</p></>}/>
      </Routes>
    </Router>
  )
}

export default App
