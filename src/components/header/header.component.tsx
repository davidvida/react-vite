import React from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((state: any) => state.data);
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <h3 style={{ margin: 0 }} >Header ({data.length})</h3>
    </Box>
  );
};

export default Header;
