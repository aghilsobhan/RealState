import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function AppLayoot(props) {
    return (
        <div>
      
       
        <main>
        <Outlet />
        </main>

        <Footer/>
    
    </div>
    );
}

export default AppLayoot;