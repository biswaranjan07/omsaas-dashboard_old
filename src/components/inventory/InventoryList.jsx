import React, { useState } from "react";
import { Box, useTheme, Modal, TextField, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {
  mockDataInventoryDetails,
  mockDataProductDetails,
  mockDataStoreDetails,
} from "../../data/mockData"; // Updated import

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

  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [newValue, setNewValue] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  const handleOpen = (row) => {
    setCurrentRow(row);
    setNewValue(""); // Ensure the New Value field is empty when the modal opens
    setReason("");
    setError("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewValueChange = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setError("Please enter a non-negative number.");
    } else {
      setError("");
      setNewValue(value);
    }
  };

  const handleUpdate = () => {
    if (currentRow && error === "") {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.productId === currentRow.productId && row.storeId === currentRow.storeId
            ? { ...row, inventory: parseInt(newValue, 10) }
            : row
        )
      );
    }
    handleClose();
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
      editable: false,
      type: "number",
      headerAlign: "left", // Align header to the left
      renderCell: (params) => (
        <Box
          onClick={() => handleOpen(params.row)}
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
            color: colors.greenAccent[300],
            textAlign: "left", // Align text to the left
            width: "100%",    // Ensures full width clickable
          }}
        >
          {params.value}
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
        />
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Edit Inventory</h2>
          <TextField
            label="Current Value"
            value={currentRow ? currentRow.inventory : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            label="New Value"
            value={newValue}
            onChange={handleNewValueChange}
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Enter new value" // Show a placeholder
            error={!!error}
            helperText={error}
            inputProps={{
              type: "number",
              min: "0",
            }}
          />
          <TextField
            label="Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
            inputProps={{
              maxLength: 100,
            }}
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdate}
              disabled={!!error}
            >
              Update
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default InventoryList; // Updated export
