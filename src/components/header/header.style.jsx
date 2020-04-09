import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  height: 70px;
  width: 100%;
  display: flex;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: white;
  box-shadow: 0 0 11px 1px rgba(0, 0, 0, 0.418);
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  position: relative;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
`;
