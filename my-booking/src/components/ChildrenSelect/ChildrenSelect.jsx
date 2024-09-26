import React from "react";

import { Field } from "react-final-form";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
const ChildrenSelect = () => {
  return (
    <Field name="children">
      {({ input, meta }) => (
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel>Children</InputLabel>
          <Select
            label="Children"
            onChange={(event) => {
              input.onChange(event.target.value);
            }}
            {...input}
            value={input.value}
          >
            <MenuItem value="one">1</MenuItem>
            <MenuItem value="two">2</MenuItem>
            <MenuItem value="three">3</MenuItem>
            <MenuItem value="four">4</MenuItem>
          </Select>
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </FormControl>
      )}
    </Field>
  );
};

export default ChildrenSelect;
