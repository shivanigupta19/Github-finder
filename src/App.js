import {BrowserRouter as Router ,  Route , Routes} from 'react-router-dom'
import Navbar from './component/layout/Navbar';
import './component/layout/Footer'
import Footer from './component/layout/Footer';
import Home from './component/pages/Home';
import NotFound from './component/pages/NotFound';
import About from './component/pages/About';
import './App.css'
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'
import Alert from './component/layout/Alert'
import User from './component/pages/User'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-0'>
          <Alert/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/user/:login' element={<User/>} />
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
