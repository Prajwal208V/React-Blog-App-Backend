import TopPost from './top_posts';
import './category_display.css';
import React from 'react';
// import { useNavigate } from 'react-router-dom';


const Categorydisplay = (props) => {
  const [mainList, toplist, advisementList] = props.data;
  // const navigate = useNavigate();
  const category = props.id[1];
  const date = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  // navigate(`/categoty/${artical}/articalNo/${id}`);
  const pathChnger=()=>{
    
  }
  return (
    <div className="category_container">
      <div className="category_left_box">
        <h2>{category}</h2>
        <div className="left_box">
          {
            mainList.map((element, ind) => {
              return (
                <div key={element.id.toString()} className="category_box" onClick={() => pathChnger()}>
                  <img src={element.image} alt="artical" />
                  <div className="category_block">
                    <div className="category_title"><h3>{element.title}</h3></div>
                    <div className="category_left_box_para" ><p>{element.para}.</p> </div>
                    <h6 className="h6"><span className="title">{category} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h6>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="category_right_box">
        <TopPost id={[category]} data={[toplist, advisementList]} />
      </div>
    </div>
  )
}

export default Categorydisplay;