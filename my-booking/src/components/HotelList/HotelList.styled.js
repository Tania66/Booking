import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 25px;
`;

export const ImagesRoom = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const Item = styled.li`
  padding: 15px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 1 25%;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 0px 0px 4px 4px;
  gap: 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
    background-color: transparent;
  }
`;

export const TitleHotel = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(24 / 16);
  letter-spacing: 0.02em;
`;

export const AddressHotel = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
  letter-spacing: 0.02em;
`;

export const SpanAddress = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);
  letter-spacing: 0.02em;
`;

export const StarContainer = styled.div`
  display: flex;
  margin-top: auto;
  gap: 4px;
`;

export const Stars = styled(FaStar)`
  width: 16px;
  height: 16px;
  fill: #ffc531;
`;
