import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Field } from "react-final-form";
import { format } from "date-fns";
import { CalendarContainer,SpanError } from "./CalendarData.styled";
const CalendarData = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);




  return (
    <CalendarContainer>
      <div>
        <Field name="startDate">
          {({ input, meta }) => (
            <>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Check in"
                  disablePast
                  value={startDate}
                  onChange={(startDate) => {
                    input.onChange(format(startDate, "MM/dd/yyyy"));
                  }}
                />
              </LocalizationProvider>
              {meta.touched && meta.error && <SpanError>{meta.error}</SpanError>}
            </>
          )}
        </Field>
      </div>

      <div>
        <Field name="endDate">
          {({ input, meta }) => (
            <>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Check out"
                  disablePast
                  value={endDate}
                  onChange={(endDate) => {
                    input.onChange(format(endDate, "MM/dd/yyyy"));
                  }}
                  // renderInput={(params) => <TextField {...params} />}
          
                />
              </LocalizationProvider>
              {meta.touched && meta.error && <SpanError>{meta.error}</SpanError>}
            </>
          )}
        </Field>
      </div>
    </CalendarContainer>
  );
};

export default CalendarData;
