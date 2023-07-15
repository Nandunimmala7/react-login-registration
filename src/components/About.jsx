import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/abut.css';
import AboutBox from './AboutBox';

const About = () => {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/codebuds-fk/chat/chats')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const openHandle = item => {
    if (item === order) {
      setExpanded(!expanded);
    } else {
      setOrder(item);
      setExpanded(true);
    }
  };

  return (
    <div className={expanded ? 'container-NX' : 'container'}>
      {data.map(item => (
        <div key={item.id} onClick={() => openHandle(item)}>
          <h1>{item.title}</h1>
        </div>
      ))}
      {expanded && <AboutBox orderdetails={order} />}
    </div>
  );
};

export default About;
