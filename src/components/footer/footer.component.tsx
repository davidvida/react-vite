import React, { useContext } from "react";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";
import { AddIcon, AddText, Wrapper } from "./footer.styles";

const Footer = () => {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: Types.Add });
  }

  return (
    <Wrapper onClick={handleClick}>
      <AddIcon/>
      <AddText>Add new Item</AddText>
    </Wrapper>
  )
};

export default Footer;
