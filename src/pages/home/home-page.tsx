import React, { useState } from "react";
import { PrimaryButton } from "./home-page.styles";

type Props = {
  handleRedirect: (route: string) => void;
}

const HomePage:React.FC<Props> = ({ handleRedirect }) => {
  const [ disabled, setDisabled ] = useState(false);

  const handleClick = () => {
    setDisabled(prev => !prev);
    handleRedirect('/todos');
  }

  return (
    <>
      <div>Home Page</div>
      <PrimaryButton color="primary" onClick={handleClick} disabled={disabled} >Go to Todos</PrimaryButton>
    </>
  );
}

export default HomePage;