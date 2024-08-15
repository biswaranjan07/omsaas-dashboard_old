import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import PurchaseOrderForm from "../../components/createPurchaseOrder/PurchaseOrderForm";
import AddIcon from '@mui/icons-material/Add';
import StoreForm from "../../components/storeAdd/StoreForm";

const NewStore = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Inventory" subtitle="Create New Store" />
      </Box>
      <StoreForm/>
    </Box>
  );
};

export default NewStore;
