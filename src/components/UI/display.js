import React from 'react';
import { useSelector } from 'react-redux';
import "./display.css";

const Display = (props) => {
  const title = useSelector(select => select.artical_title);
  const image = useSelector(select => select.artical_image);
  const para = useSelector(select => select.artical_para);
  const id = useSelector(select => select.artical_id);
  console.log(title, image, para, id);

  return (
    <>
      <div className="display_container">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{para}</p>
      </div>
      
    </>
  )
}

export default Display;