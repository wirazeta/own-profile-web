import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
function App() {

  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Home />
    </>
  )
}

export default App
