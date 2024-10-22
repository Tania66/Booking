import styled from "styled-components";

export const BackButton = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid orange;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: orange;
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: 1px solid transparent;
    -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
    background-color: transparent;
    color: orange;
  }
`;
