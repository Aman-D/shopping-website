import styled from "styled-components";

export const CartDropDownConatiner = styled.div`
  position: absolute;
  width: 300px;
  height: 540px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.959);
  top: 90px;
  right: 40px;
  z-index: 5;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.575);
`;

export const CartItemConatiner = styled.div`
  height: 440px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;
export const EmptyMessage = styled.span``;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
  font-size: 01.2rem;
  padding: 20px;
`;
