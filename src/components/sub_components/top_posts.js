// import React, { useContext } from 'react';
// import { Pathchanger } from '../store/specificIteam';
// import { useNavigate } from 'react-router-dom';
import './top_posts.css';

const TopPost = (props) => {
    const [toplist, advisementList] = props.data;
    // const navigate = useNavigate();
    const category = props.id[1];
    const date = new Date();

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var rank = 1;

    const pathChnger = () => {
    }
    // navigate(`/categoty/${artical}/articalNo/${id}`);

    function topMostArt() {
        if (toplist[4]) {
            return (
                <div onClick={() => pathChnger()}>
                    <img src={toplist[4].image} alt="topmostartical" />
                    <div className="top_rank_box">
                        <div className="top_post_block">
                            <div className="top_post_title"><h5>{toplist[4].title}</h5></div>
                            <h6 className="top_post_h6"><span className="title">{category} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h6>
                        </div >
                        <h2 className="topmost_rank">{rank++}</h2>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="top_list_container">
            <h2><span className="top">Top</span>Posts</h2>
            <div className="top_most_box">
                {topMostArt()}
                <div className="subTop_container">
                    {toplist.map((element, ind) => {
                        if (ind !== 4) {
                            return (
                                <div className="bottom_most_box" key={ind.toString()} onClick={() => pathChnger()}>
                                    <img src={element.image} alt={"sub_post"} />
                                    <div className="top_most_title_box">
                                        <div className="top_most_title"><h3>{element.title}</h3></div>
                                        <h6 className="h6"><span className="title">{category} </span> / {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h6>
                                    </div>
                                    <h2 className="top_rank">{rank++}</h2>
                                </div>
                            )
                        }
                        return'';
                    })}
                </div>
            </div>
            <div className="advertisement">
                <img src={advisementList[0]} alt="advertisement" />
                <img src={advisementList[1]} alt="advertisement" />
            </div>
        </div>
    )
}

export default TopPost;
