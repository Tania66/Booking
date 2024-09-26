import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-final-form";
import SelectDestination from "../SelectDestination/SelectDestination";
import CalendarData from "../CalendarDate/CalendarData";
import ChildrenSelect from "../ChildrenSelect/ChildrenSelect";
import AdultsSelect from "../AdultsSelect/AdultsSelect";
import { getHotel } from "../../features/redux/hotelOperation";


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
      errors.endDate = "You can not reserved date in past";
    }
       return errors;
    }
    

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit}) => (
          <form onSubmit={handleSubmit}>
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
              <button type="submit">Find</button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default SearchForm;
