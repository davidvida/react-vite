import React from "react";
import { useDispatch } from "react-redux";
import { Types } from "../../reducer/actions";
import { todoActions } from "../../slices/todos/todoSlice";
import { AddIcon, AddText, Wrapper } from "./footer.styles";

const Footer = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch({ type: Types.Add });
    dispatch(todoActions.add());
  }

  return (
    <Wrapper onClick={handleClick}>
      <AddIcon/>
      <AddText>Add new Item</AddText>
    </Wrapper>
  )
};

export default Footer;
