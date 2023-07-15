import React, { useState } from 'react';
import HomeExe from './HomeExe';
import { useNavigate } from 'react-router-dom';

const Home = ({ data }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isExpanded, setExpandedState] = useState(false);
const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const openNew = (item) => {
    if (item === selectedOrder) {
      setExpandedState(!isExpanded);
    } else {
      setSelectedOrder(item);
      setExpandedState(true);
      console.log('clicked');
      navigate('/homeexe', { state: { item : { item } } });

      
    }
  };

  return (
    <>
      <div className='search-bar'>
        <label className='label' htmlFor='search'>
          Search:
        </label>
        <input
          type='search'
          onChange={handleSearch}
          id='search'
          className='search'
          placeholder='Search...'
        />
      </div>
      <div className='apii'>
        {filteredData.map((item) => (
          <div
            key={item.id}
            className='card'
            onClick={() => openNew(item)}
          >
            <img src={item.url} alt={item.title} />
            <h6>{item.title}</h6>
            
          </div>
        ))}
        {isExpanded && <HomeExe selectedOrder={selectedOrder} />}
      </div>
      
    </>
  );
};

export default Home;
