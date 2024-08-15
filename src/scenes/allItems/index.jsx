import { Box, Button, useTheme, Menu, MenuItem } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import CustomerList from "../../components/customers/CustomerList";
import { useState } from "react";

const AllItems = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Sales" subtitle="Item Details" />
        <Box>
          <Button
            onClick={handleClick}
            sx={{
              ":hover": {
                bgcolor: colors.greenAccent[500],
                color: colors.blueAccent[900],
              },
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <AddIcon sx={{ mr: "10px" }} />
            Create New Item
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/createNewItem/addExistingProduct">
              Add Existing Product
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/createNewItem/createBundleItem">
              Create Bundle Item
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/createNewItem/createServices">
              Create Services
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <CustomerList />
    </Box>
  );
};

export default AllItems;
