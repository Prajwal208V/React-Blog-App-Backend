import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Categorydisplay from '../sub_components/category_display';
const Technology = () => {
  const [mainList, setMainList] = useState([]);
  const [toplist, setTolist] = useState([]);
  const [advisementList, setAdvisementList] = useState([]);

  useEffect(() => {
    axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/category/technology/list').then((response) => {
      setMainList(response.data);
    });
    axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/category/technology/toplist').then((response) => {
      setTolist(response.data);
    });
    axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/category/technology/advisement').then((response) => {
      setAdvisementList(response.data);
    });
  }, []);

  return (
    <div>
      <Categorydisplay id={[4, "Technology"]} data={[mainList, toplist, advisementList]} />
    </div>
  )
}

export default Technology;