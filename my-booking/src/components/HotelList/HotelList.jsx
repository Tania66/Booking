import React from "react";
import { useSelector } from "react-redux";
import {
  AddressHotel,
  ImagesRoom,
  Item,
  List,
  SpanAddress,
  StarContainer,
  Stars,
  TitleHotel,
} from "./HotelList.styled";
import img from "../../assets/468822592.jpg";
import shortid from "shortid";
const HotelList = () => {
  const hotel = useSelector((state) => state.hotel.items);

  const hotelRoom = img;
  return (
    <div>
      <h2>Hotel</h2>

      <List>
        {hotel.length > 0 ? (
          hotel.map((item) => (
            <Item key={item.id}>
              <ImagesRoom src={hotelRoom} alt="room" />

              <TitleHotel>{item.name}</TitleHotel>
              <AddressHotel>
                <SpanAddress>adress: </SpanAddress> {item.address}
              </AddressHotel>
              <AddressHotel>
                <SpanAddress>city:</SpanAddress> {item.city}, {item.state}
              </AddressHotel>
              <StarContainer>
                {Array(Math.max(0, Math.floor(item.hotel_rating)))
                  .fill()
                  .map((_, i) => (
                    <div key={shortid.generate()}>
                      <Stars />
                    </div>
                  ))}
              </StarContainer>
            </Item>
          ))
        ) : (
          <li>
            <p>❌ Sorry, not found hotel</p>
          </li>
        )}
      </List>
    </div>
  );
};

export default HotelList;
