import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Categorydisplay from '../sub_components/category_display';
const Fitness = () => {
  const [mainList, setMainList] = useState([]);
  const [tolist, setTolist] = useState([]);
  const [advisementList, setAdvisementList] = useState([]);

  useEffect(() => {
    axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/category/fitness/list').then((response) => {
      setMainList(response.data);
    });
    axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/category/fitness/toplist').then((response) => {
      setTolist(response.data);
    });
    axios.get('https://react-blog-backend-server.herokuapp.com/api/v1/category/fitness/advisement').then((response) => {
      setAdvisementList(response.data);
    });
  }, []);

  return (
    <div>
      <Categorydisplay id={[1, "Fitness"]}  data={[mainList, tolist, advisementList]} />
    </div>
  )
}

export default Fitness