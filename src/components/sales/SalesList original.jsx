import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {
  mockDataSalesOrderDetails,
  mockDataCustomerDetails,
  mockDataStoreDetails,
} from "../../data/mockData"; // Import necessary mock data
import { useNavigate } from "react-router-dom";

const SalesList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  // Combine data from mockDataSalesOrderDetails, mockDataCustomerDetails, and mockDataStoreDetails
  const salesRows = mockDataSalesOrderDetails.map((order) => {
    const customer = mockDataCustomerDetails.find(
      (customer) => customer.customerId === order.customerId
    );
    const store = mockDataStoreDetails.find(
      (store) => store.storeId === order.storeId
    );

    return {
      id: order.orderId,
      orderId: order.orderId,
      storeName: store ? store.storeName : "Not Available",
      customerName: customer ? customer.customerName : "Not Available",
      orderDateTime: order.orderDateTime,
      orderTimeZone: order.orderTimeZone,
    };
  });

  const columns = [
    {
      field: "orderId",
      headerName: "Order ID",
      flex: 0.5,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "storeName",
      headerName: "Store Name",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "orderDateTime",
      headerName: "Order Date and Time",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "orderTimeZone",
      headerName: "Timezone",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
  ];

  const handleRowClick = (params) => {
    navigate(`/salesOrderDetails/${params.row.orderId}`);
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
          getRowId={(row) => row.orderId}
          rows={salesRows} // Use combined salesRows data
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

export default SalesList;
