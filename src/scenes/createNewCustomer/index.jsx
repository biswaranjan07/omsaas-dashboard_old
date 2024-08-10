import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import CustomerForm from "../../components/customerAdd/CustomerForm";

const NewCustomer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Sales" subtitle="Create New Customer" />
      </Box>
      <CustomerForm/>
    </Box>
  );
};

export default NewCustomer;
