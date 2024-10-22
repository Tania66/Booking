import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  -webkit-box-shadow: 0px 10px 13px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 13px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 13px -9px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
`;

export const LogoText = styled.p`
  color: orange;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
  list-style: none;
`;

export const Link = styled(NavLink)`
  color: orange;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 4px;

  &.active {
    color: white;
    background-color: orange;
  }
`;
