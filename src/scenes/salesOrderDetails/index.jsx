import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  mockDataCustomerDetails,
  mockDataSalesOrderDetails,
  mockDataProductDetails,
  mockDataStoreDetails,
} from "../../data/mockData"; // Import all necessary mock data
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  InputAdornment,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const SalesOrderDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the sales order by ID
  const salesOrder = mockDataSalesOrderDetails.find(
    (order) => order.orderId === parseInt(id)
  );

  if (!salesOrder) {
    return <Typography variant="h4">Sales order not found</Typography>;
  }

  // Find the customer associated with the order
  const customer = mockDataCustomerDetails.find(
    (customer) => customer.customerId === salesOrder.customerId
  );

  // Find the store associated with the order
  const store = mockDataStoreDetails.find(
    (store) => store.storeId === salesOrder.storeId
  );

  const initialValues = {
    storeName: store ? store.storeName : "Not Available",
    customerName: customer ? customer.customerName : "Not Available",
    orderDateTime: salesOrder.orderDateTime || "Not Available",
    orderTimeZone: salesOrder.orderTimeZone || "Not Available",
    omnichannel: salesOrder.omnichannel || "Not Available",
    fulfilment: salesOrder.fulfilment || "Not Available",
    carrier: salesOrder.carrier || "Not Available",
    carrierService: salesOrder.carrierService || "Not Available",
  };

  const validationSchema = Yup.object({
    storeName: Yup.string().required("Required"),
    customerName: Yup.string().required("Required"),
    orderDateTime: Yup.string().required("Required"),
    orderTimeZone: Yup.string().required("Required"),
    omnichannel: Yup.string().required("Required"),
    fulfilment: Yup.string().required("Required"),
    carrier: Yup.string().required("Required"),
    carrierService: Yup.string().required("Required"),
  });

  const handleSave = (values) => {
    // Handle save logic here, e.g., update the data source or make an API call
    console.log("Updated sales order data:", values);
    alert("Sales order details saved successfully!");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this sales order?"
    );
    if (confirmDelete) {
      const updatedSalesOrderDetails = [...mockDataSalesOrderDetails];
      const index = updatedSalesOrderDetails.findIndex(
        (order) => order.orderId === parseInt(id)
      );
      if (index !== -1) {
        updatedSalesOrderDetails.splice(index, 1);
        alert("Sales order deleted successfully!");
        navigate("/salesOrders");
      }
    }
  };

  // Define columns for the orderline details
  const orderLineColumns = [
    {
      field: "itemId",
      headerName: "Item ID",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "purchasedQuantity",
      headerName: "Purchased Quantity",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "measurement",
      headerName: "Measurement",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
  ];

  // Map order lines from the sales order details
  const orderLineRows = salesOrder.orderLines.map((line) => ({
    id: line.itemId,
    itemId: line.itemId,
    purchasedQuantity: line.purchasedQuantity,
    measurement: line.measurement,
  }));

  return (
    <Box m="20px">
      <Header title={`Sales Order ${salesOrder.orderId} Details`} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form>
            <Header subtitle="Basic Details" />
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <Field
                as={TextField}
                name="storeName"
                label="Store Name"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <StoreIcon />
                    </InputAdornment>
                  ),
                  readOnly: values.storeName === "Not Available",
                  style: {
                    cursor: values.storeName === "Not Available" ? "not-allowed" : "inherit",
                  },
                }}
                error={touched.storeName && !!errors.storeName}
                helperText={touched.storeName && errors.storeName}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.storeName === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="customerName"
                label="Customer Name"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                  readOnly: values.customerName === "Not Available",
                  style: {
                    cursor: values.customerName === "Not Available" ? "not-allowed" : "inherit",
                  },
                }}
                error={touched.customerName && !!errors.customerName}
                helperText={touched.customerName && errors.customerName}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.customerName === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="orderDateTime"
                label="Order Date and Time"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTimeIcon />
                    </InputAdornment>
                  ),
                  readOnly: true,
                  style: {
                    cursor: "not-allowed",
                  },
                }}
                error={touched.orderDateTime && !!errors.orderDateTime}
                helperText={touched.orderDateTime && errors.orderDateTime}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.orderDateTime === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="orderTimeZone"
                label="Timezone"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon />
                    </InputAdornment>
                  ),
                  readOnly: true,
                  style: {
                    cursor: "not-allowed",
                  },
                }}
                error={touched.orderTimeZone && !!errors.orderTimeZone}
                helperText={touched.orderTimeZone && errors.orderTimeZone}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.orderTimeZone === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="omnichannel"
                label="Omnichannel"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SyncAltIcon />
                    </InputAdornment>
                  ),
                  readOnly: values.omnichannel === "Not Available",
                  style: {
                    cursor: values.omnichannel === "Not Available" ? "not-allowed" : "inherit",
                  },
                }}
                error={touched.omnichannel && !!errors.omnichannel}
                helperText={touched.omnichannel && errors.omnichannel}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.omnichannel === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="fulfilment"
                label="Fulfilment"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AssignmentIcon />
                    </InputAdornment>
                  ),
                  readOnly: values.fulfilment === "Not Available",
                  style: {
                    cursor: values.fulfilment === "Not Available" ? "not-allowed" : "inherit",
                  },
                }}
                error={touched.fulfilment && !!errors.fulfilment}
                helperText={touched.fulfilment && errors.fulfilment}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.fulfilment === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="carrier"
                label="Carrier"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalShippingIcon />
                    </InputAdornment>
                  ),
                  readOnly: values.carrier === "Not Available",
                  style: {
                    cursor: values.carrier === "Not Available" ? "not-allowed" : "inherit",
                  },
                }}
                error={touched.carrier && !!errors.carrier}
                helperText={touched.carrier && errors.carrier}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.carrier === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="carrierService"
                label="Carrier Service"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                  readOnly: values.carrierService === "Not Available",
                  style: {
                    cursor: values.carrierService === "Not Available" ? "not-allowed" : "inherit",
                  },
                }}
                error={touched.carrierService && !!errors.carrierService}
                helperText={touched.carrierService && errors.carrierService}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.carrierService === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
            </Box>
            <Box mt={4}>
              <Header subtitle="Orderline Details" sx={{ mt: 0 }} />
              <Box
                sx={{
                  height: 200,
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  padding: "10px",
                  borderRadius: "4px",
                  marginTop: "10px", // Reduced margin for consistency
                }}
              >
                <DataGrid
                  rows={orderLineRows}
                  columns={orderLineColumns}
                  pageSize={3}
                  rowsPerPageOptions={[3]}
                  disableSelectionOnClick
                  getRowId={(row) => row.itemId}
                  sx={{
                    "& .MuiDataGrid-root": {
                      border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                      borderBottom: "none",
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
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="contained" color="secondary" type="submit">
                Save
              </Button>
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SalesOrderDetails;
