import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProductDetails } from "../../data/mockData"; // Use mockDataProductDetails
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const columns = [
    { field: "productId", headerName: "Product ID", flex: 0.5 },
    {
      field: "productName",
      headerName: "Product Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "productType",
      headerName: "Product Type",
      flex: 1,
    },
    {
      field: "totalInventory",
      headerName: "Total Inventory",
      flex: 1,
    },
    {
      field: "measurement",
      headerName: "Measurement",
      flex: 1,
    }
  ];

  const handleRowClick = (params) => {
    navigate(`/productDetails/${params.row.productId}`);
  };

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row.productId}
          rows={mockDataProductDetails} // Use mockDataProductDetails
          columns={columns}
          onRowClick={handleRowClick}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </Box>
    </Box>
  );
};

export default ProductList;