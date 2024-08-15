import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {
  mockDataInventoryDetails,
  mockDataProductDetails,
  mockDataStoreDetails,
} from "../../data/mockData"; // Updated import
import EditIcon from "@mui/icons-material/Edit"; // Import edit icon

const InventoryList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Create a map for quick lookup of product names and store names
  const productNameMap = {};
  mockDataProductDetails.forEach((product) => {
    productNameMap[product.productId] = product.productName;
  });

  const storeNameMap = {};
  mockDataStoreDetails.forEach((store) => {
    storeNameMap[store.storeId] = store.storeName;
  });

  const [rows, setRows] = useState(
    mockDataInventoryDetails.map((inventoryDetail) => ({
      ...inventoryDetail,
      productName: productNameMap[inventoryDetail.productId] || "Unknown",
      storeName: storeNameMap[inventoryDetail.storeId] || "Unknown",
    }))
  );

  const handleProcessRowUpdate = (newRow) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.productId === newRow.productId && row.storeId === newRow.storeId
          ? { ...row, inventory: newRow.inventory }
          : row
      )
    );
    return newRow;
  };

  const columns = [
    { field: "productId", headerName: "Product ID", flex: 0.5 },
    { field: "productName", headerName: "Product Name", flex: 1 },
    { field: "storeId", headerName: "Store ID", flex: 0.5 },
    { field: "storeName", headerName: "Store Name", flex: 1 },
    {
      field: "inventory",
      headerName: "Inventory",
      flex: 1,
      editable: true,
      type: "number",
      headerAlign: "left", // Align header to the left
      renderCell: (params) => (
        <Box display="flex" alignItems="center" sx={{ width: '100%', justifyContent: 'flex-start' }}>
          <EditIcon
            fontSize="small"
            sx={{ color: colors.greenAccent[300], marginRight: 0.5 }}
          />
          <div style={{ textAlign: "left", width: "100%" }}>{params.value}</div>
        </Box>
      ),
    },
    {
      field: "measurement",
      headerName: "Measurement",
      flex: 1,
    },
  ];

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
          getRowId={(row) => `${row.productId}-${row.storeId}`} // Ensure unique row ID
          rows={rows} // Updated data source
          columns={columns}
          pageSize={5} // Set default page size
          rowsPerPageOptions={[5, 10, 20]} // Allow rows per page options
          pagination // Enable pagination
          disableSelectionOnClick // Disable row selection
          processRowUpdate={handleProcessRowUpdate} // Handle inventory update
        />
      </Box>
    </Box>
  );
};

export default InventoryList; // Updated export
