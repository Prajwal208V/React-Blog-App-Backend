import axios from 'axios';
import React, {  useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Pathchanger } from '../store/specificIteam';
import classes from './latest_artical.module.css';
// import { useNavigate } from 'react-router-dom';


const LatestArtical = () => {
    const [LatestArticalList, setLatestArticalList] = useState([]);
    const [advisementList, setLatestadvisementList] = useState([]);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const date = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    
    const slicer = (para) => {
        return para.slice(0, 250);
    }
    const pathChnger = () => {
        // dispatch(Pathchanger());
        // navigate(`/categoty/${artical}/articalNo/${id}`);
    }
    useEffect(() => {
        axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/latestArtical').then((response) => {
            setLatestArticalList(response.data)
        })
        axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/advisement').then((response) => {
            setLatestadvisementList(response.data)
        })
    }, []);
    return (
        <div className={classes.container}>
            <h3><span className='lates_the'>Latest</span> Artical</h3>
            <div className={classes.latest_artical_container}>
                <div className={classes.boxContiner}>
                    {LatestArticalList.map((artical, index) => {
                        return (
                            <div className={classes.box01} onClick={() => pathChnger()} key={index}>
                                <img src={artical.image} alt="artical" />
                                <div>
                                    <h5 className={classes.h5}>{artical.title}</h5>
                                    <div className={classes.box1Para}><p>{slicer(artical.para)}.</p> </div>
                                    <h6 className={classes.h5}><span className="title">{artical.category} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h6>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className={classes.box2} >
                    <img src={advisementList[0]} alt="prep" />
                    <img src={advisementList[1]} alt="prep" />
                </div>
            </div>
        </div>
    )
}

export default LatestArtical;