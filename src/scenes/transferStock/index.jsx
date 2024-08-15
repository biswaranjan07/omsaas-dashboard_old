import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import StockTransferForm from "../../components/transferStock/StockTransferForm";

const TransferStock = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Inventory" subtitle="Transfer Stock" />
      </Box>
      <StockTransferForm/>
    </Box>
  );
};

export default TransferStock;
