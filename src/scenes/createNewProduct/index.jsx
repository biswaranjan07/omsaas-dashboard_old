import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import ProductForm from "../../components/productAdd/ProductForm";

const NewProduct = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Inventory" subtitle="Create New Product" />
      </Box>
      <ProductForm/>
    </Box>
  );
};

export default NewProduct;
