import { Route, Routes, BrowserRouter ,Navigate} from 'react-router-dom';
import Home from '../home';
import Tourism from '../tourism/tourism';
import Fitness from '../fitness/fitness';
import Technology from '../technology/technology';
import Bollywood from '../bollywood/bollywood';
import Food from '../food/food';
import Display from './display';
import { Nav } from './nav';
import {useSelector} from 'react-redux';

import './UI.css';

export const Ui = () => {
    const id =useSelector(select => select.artical_id);
    let artical;
    switch(true){
       case (id>=1 && id<= 15):
           artical ="Tourism";
           break;
       case (id>=16 && id<= 30):
           artical ="Fitness";
           break;
       case (id>=31 && id<=45):
           artical ="Bollywood";
           break;
       case (id>=46 && id<= 60):
           artical ="Food";
           break;
       default:
            artical ="Technology";
            break;
    }
    return (
        <div className="container">
            <div className="title_box">
                <span className="the">The</span><h1> in<span className="fo">Fo</span>B<span className="oo">oo</span>k</h1>
            </div>
            <BrowserRouter >
                <Nav />
                <Routes>
                    <Route path='/' element={ <Navigate to='/Home' /> } />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/categoty/Tourism' element={<Tourism />} />
                    <Route path='/categoty/Fitness' element={<Fitness />} />
                    <Route path='/categoty/Technology' element={<Technology />} />
                    <Route path='/categoty/Bollywood' element={<Bollywood />} />
                    <Route path='/categoty/Food' element={<Food />} /> 
                    <Route path={`/categoty/:${artical}/articalNo/:${id}`} element={<Display />} />
                    {/* <Route path='/categoty/Technology/articalNo/48' element={<Display />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}