import React from "react";
import { AddIcon, AddText, Wrapper } from "./footer.styles";

type Props = {
  onAddNewItem: () => void;
}

const Footer = ({ onAddNewItem }: Props) => {

  const handleClick = () => {
    console.log('Add Item');
    onAddNewItem();
  }

  return (
    <Wrapper onClick={handleClick}>
      <AddIcon/>
      <AddText>Add new Item</AddText>
    </Wrapper>

  )
};

export default Footer;

