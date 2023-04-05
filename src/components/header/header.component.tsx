import React, { useContext } from "react";
import { Box } from "@mui/system";
import { AppContext } from "../../context/app-context";

const Header = () => {
  const { state } = useContext(AppContext);
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <h3 style={{ margin: 0 }} >Header ({state.data.length})</h3>
    </Box>
  );
};

export default Header;
