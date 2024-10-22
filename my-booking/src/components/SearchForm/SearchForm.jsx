import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-final-form";
import SelectDestination from "../SelectDestination/SelectDestination";
import CalendarData from "../CalendarDate/CalendarData";
import ChildrenSelect from "../ChildrenSelect/ChildrenSelect";
import AdultsSelect from "../AdultsSelect/AdultsSelect";
import { getHotel } from "../../features/redux/hotelOperation";
import { FindButton, FormContainer,HomeContainer, MainForm } from "./SearchForm.styled";
import HomePageContent from "../HomePageContent/HomePageContent";


const SearchForm = () => {
  const dispatch = useDispatch();


  const onSubmit = (values,{reset}) => {
    dispatch(getHotel(values.destination));
  
    console.log("Form data:", values);
    reset();
  };

  const validate = (values) =>{
    const errors = {};
    if(values.startDate >= values.endDate){
      errors.endDate = "You can not reserved date in past!";
    }
       return errors;
    }
    

  return (
    <HomeContainer>
       <FormContainer>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit}) => (
          <MainForm onSubmit={handleSubmit}>
            <div>
              <SelectDestination />
            </div>

            <div>
              <CalendarData />
            </div>

            <div>
              <AdultsSelect />
            </div>

            <div>
              <ChildrenSelect />
            </div>

            <div>
              <FindButton type="submit">Find</FindButton>
            </div>
          </MainForm>
        )}
      />
    </FormContainer>
<div>
     <HomePageContent/>
</div>
 
    </HomeContainer>
   
  );
};

export default SearchForm;
