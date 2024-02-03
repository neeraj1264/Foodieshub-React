import Header from './components/header/Header';
import { Outlet } from 'react-router';
import Footer from './components/footer/Footer';
function Layout() {

    return (
     <>
         <div className="app-container">
     <Header/>
     <div className='main-content'>
     <Outlet/>
     </div>
     <Footer/>
     </div>
     </>
    )
  }
  
  export default Layout