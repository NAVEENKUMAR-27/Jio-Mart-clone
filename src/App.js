  import logo from './logo.svg';
  import './App.css';
  import {Menu} from "./components/menu/menu"
  import { BrowserRouter,Routes,Route } from 'react-router-dom';
  import { Menu_curosal } from './components/menu _carosel/menu_curosal';
 import { Groceries_mart } from './components/Groceries/Groceries';
import { Fruits_page } from './components/perimum fruit/fruits';
import { Home_Kitechen } from './components/home and kitchen/home_kit';
import { Electrons } from './components/electronic/electronic';
import { Offer } from './components/offer/offer';
import { Footer } from './components/footer/footer';
import { Login } from './components/login/login';

  function App() {
    return (
      <>
        {/* <BrowserRouter>
           <Routes>
              <Route path='/' element={[<Menu_curosal/>,<Groceries_mart/>,<Fruits_page/>,<Home_Kitechen/>,<Electrons/>,<Offer/>,<Footer/> ]}/>
              <Route path='/Groceries' element={[<Menu_curosal/>,<Groceries_mart/>]}/>
           </Routes>
        </BrowserRouter> */}
              {/* <Groceries_mart/> */}
              {/* <Fruits_page/> */}
              {/* <Home_Kitechen/> */}
              {/* <Electrons/> */}
              {/* <Offer/>
              <Footer/>
            */}


             <Login/>
      </>
    );
  }

  export default App;
