import React from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import Hotel from '../Hotel/Hotel';
import { useSelector } from "react-redux";



const Home = () => {
  const isRequest = useSelector((state) => state.hotel.isRequest);

  
  return <>
  {isRequest ? <Hotel /> : 
  <SearchForm/>
  }
  </>;
  
}

export default Home

