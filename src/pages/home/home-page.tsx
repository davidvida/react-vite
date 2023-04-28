import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h2>Home Page</h2>
      <Box display='flex' flexDirection='column'>
        <Link to="/todos">
          <Button variant="outlined" color="secondary">Go to Todos Page</Button>
        </Link>
        <br />
        <Link to="/auth">
          <Button variant="outlined" color="secondary">Go to Auth Page</Button>
        </Link>
      </Box>
    </>
  );
}

export default HomePage;