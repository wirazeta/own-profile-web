import './App.css'
import Sidebar from './components/sidebar'
import Contact from './pages/contact'
import Home from './pages/home'
import Project from './pages/project'
import Work from './pages/work'
import Admin from './pages/admin'
function App() {

  return (
    <>
      <Sidebar/>
      <Home/>
      <Work/>
      <Project/>
      <Contact/>
      <Admin/>
    </>
  )
}

export default App
