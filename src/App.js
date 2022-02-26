import {BrowserRouter as Router ,  Route , Routes} from 'react-router-dom'
import Navbar from './component/layout/Navbar';
import './component/layout/Footer'
import Footer from './component/layout/Footer';
import Home from './component/pages/Home';
import NotFound from './component/pages/NotFound';
import About from './component/pages/About';
import './App.css'
import {GithubProvider} from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <Router className='bg-purple-500'>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/notfound' element={<NotFound/>} />
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
