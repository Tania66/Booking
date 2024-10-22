import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: relative;
`;

export const SpanError = styled.span`
  position: absolute;
  top: 99%;
  left: 52%;
  z-index: 10;
  color: rgba(239, 80, 80, 1);
  font-size: 12px;
`;
