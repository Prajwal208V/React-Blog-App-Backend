import axios from 'axios';
import React, {useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Pathchanger } from '../store/specificIteam';
// import { useNavigate } from 'react-router-dom';
import './latest.css';

const Latest = () => {
    const [latestList, setLatestList] = useState([]);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const date = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
 
  
    const slicer = (para) => {
        return para.slice(0, 250);
    }
    const pathChnger = ([ind1, ind2]) => {
       
        // dispatch(Pathchanger(blockList[ind1][ind2]));
        // navigate(`/categoty/${artical}/articalNo/${id}`
    }
    const getData = async () => {
        const response = await axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/latest');
        setLatestList(await response.data);
    }
    useEffect(() => { //<-
        getData();
    }, [])
    return (
        <div className="lest_container">
            <h3><span className='lates_the'>The</span> Latest</h3>
            <div className="lest_box">
                {latestList.map((artical, index) => {
                    return (
                        <div className="box" onClick={() => pathChnger()} key={index}>
                            <img src={artical.image} alt="artical" />
                            <div className="para_box"><p>{slicer(artical.para)}.</p> </div>
                            <h5><span className="title">{artical.category} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Latest;