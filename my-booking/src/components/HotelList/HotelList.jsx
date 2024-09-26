import React from 'react'
import { useSelector } from 'react-redux';
const HotelList = () => {
    const hotel = useSelector(state => state.hotel.items);
  return (
    <div>
    <ul>
      {hotel.length > 0 ? (
        hotel.map(item => (
          <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.address}</p>
           <p>{item.city}</p>
    <p>{item.state}</p>
   <p>{item.hotel_rating}</p>
          </li>
        ))
      ) : (
        <li>
          <p>❌ Sorry, not found film</p>
        </li>
      )}
    </ul>
    </div>
  )
}

export default HotelList
