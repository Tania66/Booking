import React from 'react'
import HotelList from "../../components/HotelList/HotelList"
import { BackButton} from './Hotel.styled';
import { FaArrowLeft } from "react-icons/fa6";
import { HomeContainer } from '../../components/SearchForm/SearchForm.styled';
const Hotel = () => {
  function refreshPage(){ 
    window.location.reload(); 
    console.log("click on home");
    
}

  return (
    <HomeContainer>
<div>
  <BackButton type='button' onClick={refreshPage}><FaArrowLeft size={25} color="orange"/>Back to Search</BackButton>
</div>
<HotelList/>
    </HomeContainer>
  )
}

export default Hotel
