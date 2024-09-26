import React, { useEffect} from "react";
import { getDestination } from "../../features/redux/hotelOperation";
import { useDispatch, useSelector } from "react-redux";
import { Field } from "react-final-form";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FETCH_DATA_DESTINATION_SAGA } from "../../features/sagas/actionsType";
const SelectDestination = () => {

  const dispatch = useDispatch();
  const destination = useSelector((state) => state.destination.items);

  useEffect(() => {
    dispatch({ type: FETCH_DATA_DESTINATION_SAGA});
  }, [dispatch]);




  return (
<Field name="destination">
{({input, meta }) => (
  <FormControl sx={{ m: 1, minWidth: 250 }}>     
    <InputLabel>Destination</InputLabel>
  <Select   label="Destination" onChange={(event) => { input.onChange(event.target.value);}}   {...input}  value={input.value}>
    
       {destination.map((item) => (
  
            <MenuItem value={item.label} key={item.id}> {item.label}</MenuItem>
          ))}
        </Select>
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </FormControl>
)}
</Field>
  );
};

export default SelectDestination;



