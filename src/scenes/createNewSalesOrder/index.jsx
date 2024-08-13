import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import SalesOrderForm from "../../components/salesOrderAdd/salesOrderForm";

const NewSalesOrder = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Sales" subtitle="Create New Sales Order" />
      </Box>
      <SalesOrderForm/>
    </Box>
  );
};

export default NewSalesOrder;
