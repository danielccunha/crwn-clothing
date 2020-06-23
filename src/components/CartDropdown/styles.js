import styled from "styled-components";
import CustomButton from "../CustomButton";

export const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 0;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const Items = styled.div`
  height: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled(CustomButton)`
  margin-top: auto;
  padding-top: 0;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 100px auto;
`;
