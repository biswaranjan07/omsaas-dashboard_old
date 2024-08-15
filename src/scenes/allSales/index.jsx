import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import SalesList from "../../components/sales/SalesList";

const AllSales = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Sales" subtitle="Sales Details" />
        <Box>
          <Link underline="none" to={"/createNewSalesOrder"}>
            <Button
              sx={{
                ":hover": {
                  bgcolor: colors.greenAccent[500], // theme.palette.primary.main
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
              Create new Sales Order
            </Button>
          </Link>
        </Box>
      </Box>
      <SalesList />
    </Box>
  );
};

export default AllSales;
