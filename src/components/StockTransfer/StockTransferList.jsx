import React, { useState } from "react";
import { Box, useTheme, Modal, TextField, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataStockTransfer } from "../../data/mockData"; // Import mockDataStockTransfer
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const StockTransferList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [rows, setRows] = useState(
    mockDataStockTransfer.map((transfer) => ({
      ...transfer,
      originName: transfer.origin.storeName,
      destinationName: transfer.destination.storeName,
    }))
  );

  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  const handleOpen = (row) => {
    setCurrentRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRowClick = (params) => {
    // Redirect to the details page for the clicked order
    navigate(`/stockTransferDetails/${params.row.orderId}`);
  };

  const columns = [
    { field: "orderId", headerName: "Order ID", flex: 0.5 },
    { field: "orderType", headerName: "Transfer Type", flex: 1 },
    { field: "originName", headerName: "Origin", flex: 1 },
    { field: "destinationName", headerName: "Destination", flex: 1 },
    { field: "orderDateTime", headerName: "Order Date and Time", flex: 1 },
    { field: "orderTimeZone", headerName: "Timezone", flex: 0.5 },
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
          getRowId={(row) => row.orderId} // Ensure unique row ID
          rows={rows} // Updated data source
          columns={columns}
          pageSize={5} // Set default page size
          rowsPerPageOptions={[5, 10, 20]} // Allow rows per page options
          pagination // Enable pagination
          disableSelectionOnClick // Disable row selection
          onRowClick={handleRowClick} // Add onRowClick handler
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
          <h2>Transfer Details</h2>
          <TextField
            label="Order ID"
            value={currentRow ? currentRow.orderId : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            label="Transfer Type"
            value={currentRow ? currentRow.orderType : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            label="Origin"
            value={currentRow ? currentRow.originName : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            label="Destination"
            value={currentRow ? currentRow.destinationName : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            label="Order Date and Time"
            value={currentRow ? currentRow.orderDateTime : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            label="Timezone"
            value={currentRow ? currentRow.orderTimeZone : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default StockTransferList;
