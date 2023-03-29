import React from "react";
import { ItemProps } from "../../types/todo-item";

type Props = {
  onAddNewItem: () => void;
}

const Footer = ({ onAddNewItem }: Props) => {

  const handleClick = () => {
    console.log('Add Item');
    onAddNewItem();
  }

  return (
    <button onClick={handleClick}>+ Add new Item</button>
  )
};

export default Footer;