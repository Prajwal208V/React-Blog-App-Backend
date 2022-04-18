import './home.css';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
import React, {useState, useEffect } from 'react';
import Latest from './home_continer/latest';
import TopPost from './home_continer/topPost';
// import { useNavigate } from 'react-router-dom';
// import { Pathchanger } from './store/specificIteam';
import LatestArtical from './home_continer/latest_artical';

const Home = () => {
  const [headerlist, setHeaderList] = useState();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const date = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

 
  useEffect(() => {
    axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/header').then((response) => {
      setHeaderList(response.data)
    })
  }, [])

  const pathChnger = () => {
  
    // navigate(`/categoty/${artical}/articalNo/${id}`);
  }
  function mainArtical() {
    if (headerlist) {
      return (
        <div className='left_main_artical mouse_hover' onClick={() => pathChnger()}>
          <img src={headerlist[0].image} alt="artical" />
          <div className='left_main_artical_box'>
            <h5>{headerlist[0].title}</h5>
            <p>{headerlist[0].category} / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</p>
          </div>
        </div>
      )
    }
  }
  function submaintopArtical() {
    if (headerlist) {
      return (
        <div className='right_main_articals' onClick={() => pathChnger()}>
          <img src={headerlist[1].image} alt="artical" />
          <div className='right_main_artical_box'>
            <h6>{headerlist[1].vtitle}</h6>
            <p>{headerlist[1].category} / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</p>
          </div>
        </div>
      )
    }
  }
  function submainbottomArtical() {
    if (headerlist) {
      return (
        <div className='right_main_articals' onClick={() => pathChnger()}>
          <img src={headerlist[2].image} alt="artical" />
          <div className='right_main_artical_box'>
            <h6>{headerlist[2].title}</h6>
            <p>{headerlist[2].category} / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</p>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='home-container'>
      <div className='main_artical'>
        {mainArtical()}
        <div className='right_main_artical'>
          {submaintopArtical()}
          {submainbottomArtical()}
        </div>
      </div>
      <div className="Latest_container">
        <Latest />
      </div>
      <div className="Latest_artical">
        <LatestArtical />
      </div>
      <div className="TopPost_artical">
        <TopPost />
      </div>
    </div>
  )
}

export default Home;