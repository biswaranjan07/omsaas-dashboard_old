import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataCustomerDetails } from "../../data/mockData"; // Use mockDataCustomerDetails
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const columns = [
    { field: "customerId", headerName: "Customer ID", flex: 0.5 },
    {
      field: "customerName",
      headerName: "Customer Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <span>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "phoneNumber",
      headerName: "Contact",
      flex: 1,
      renderCell: (params) => (
        <span>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: (params) => (
        <span>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      renderCell: (params) => (
        <span>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "State",
      headerName: "State",
      flex: 1,
      renderCell: (params) => (
        <span>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
      renderCell: (params) => (
        <span>
          {params.value || "Not Available"}
        </span>
      ),
    },
  ];

  const handleRowClick = (params) => {
    navigate(`/customerDetails/${params.row.customerId}`);
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
          getRowId={(row) => row.customerId}
          rows={mockDataCustomerDetails} // Use mockDataCustomerDetails
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

export default CustomerList;
