import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Pathchanger } from '../store/specificIteam';
// import { useNavigate } from 'react-router-dom';
import './topPost.css';

const TopPost = () => {
    const [topList, setTopList] = useState([]);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const date = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    
    var rank = 1;
    const pathChnger = () => {
        // dispatch(Pathchanger(blockList[ind1][ind2]));
        // navigate(`/categoty/${artical}/articalNo/${id}`);
    }
    useEffect(() => {
        axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/top').then((response) => {
            setTopList(response.data);
        })
    }, [])

    return (
        <div className="main-container">
            <h3><span className='lates_the'>Top</span> Post</h3>
            <div className="top_post_container">
                
                {
                    topList.map((artical, index) => {
                        return (
                            <div className='post_box' key={index.toString()} onClick={() => pathChnger()}>
                                <div className="rank_box">
                                    <img src={artical.image} alt="artical" />
                                    <h2>{rank++}</h2>
                                </div>
                                <div className="block">
                                    <div className="box1Para"><p>{(artical.para).slice(0, 150)}.</p> </div>
                                    <h6 className="h5"><span className="title">{artical.category} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h6>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default TopPost;