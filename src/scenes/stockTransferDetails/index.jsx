import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockDataStockTransfer, mockDataProductDetails } from "../../data/mockData"; // Import mockDataStockTransfer and mockDataProductDetails
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
import StoreIcon from "@mui/icons-material/Store";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const StockTransferDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the stock transfer by ID
  const stockTransfer = mockDataStockTransfer.find(
    (order) => order.orderId === parseInt(id)
  );

  if (!stockTransfer) {
    return <Typography variant="h4">Stock transfer not found</Typography>;
  }

  const initialValues = {
    orderType: stockTransfer.orderType || "Not Available",
    originStoreName: stockTransfer.origin.storeName || "Not Available",
    destinationStoreName: stockTransfer.destination.storeName || "Not Available",
    orderDateTime: stockTransfer.orderDateTime || "Not Available",
    orderTimeZone: stockTransfer.orderTimeZone || "Not Available",
    carrier: stockTransfer.orderDetails.carrier || "Not Available",
    carrierService: stockTransfer.orderDetails.carrierService || "Not Available",
  };

  const validationSchema = Yup.object({
    orderType: Yup.string().required("Required"),
    originStoreName: Yup.string().required("Required"),
    destinationStoreName: Yup.string().required("Required"),
    orderDateTime: Yup.string().required("Required"),
    orderTimeZone: Yup.string().required("Required"),
    carrier: Yup.string().required("Required"),
    carrierService: Yup.string().required("Required"),
  });

  const handleSave = (values) => {
    // Handle save logic here, e.g., update the data source or make an API call
    console.log("Updated stock transfer data:", values);
    alert("Stock transfer details saved successfully!");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this stock transfer?"
    );
    if (confirmDelete) {
      const updatedStockTransferDetails = [...mockDataStockTransfer];
      const index = updatedStockTransferDetails.findIndex(
        (order) => order.orderId === parseInt(id)
      );
      if (index !== -1) {
        updatedStockTransferDetails.splice(index, 1);
        alert("Stock transfer deleted successfully!");
        navigate("/allStockTransfer");
      }
    }
  };

  // Create a map for product ID to product name lookup
  const productIdToNameMap = mockDataProductDetails.reduce((acc, product) => {
    acc[product.productId] = product.productName;
    return acc;
  }, {});

  // Define columns for the order line details
  const baseOrderLineColumns = [
    {
      field: "productName",
      headerName: "Product Name",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "purchasedQuantity",
      headerName: "Requested Quantity",
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

  // Add additional columns if the transfer type is "Salvage"
  const orderLineColumns =
    stockTransfer.orderType === "Salvage"
      ? [
          ...baseOrderLineColumns,
          {
            field: "currency",
            headerName: "Currency",
            flex: 1,
            renderCell: () => (
              <span style={{ color: stockTransfer.orderDetails.currency ? "inherit" : "red" }}>
                {stockTransfer.orderDetails.currency || "Not Available"}
              </span>
            ),
          },
          {
            field: "unitSalvagePrice",
            headerName: "Unit Salvage Price",
            flex: 1,
            renderCell: () => (
              <span style={{ color: stockTransfer.orderDetails.sellPrice !== null ? "inherit" : "red" }}>
                {stockTransfer.orderDetails.sellPrice !== null ? stockTransfer.orderDetails.sellPrice : "Not Available"}
              </span>
            ),
          },
        ]
      : baseOrderLineColumns;

  // Map order lines from the stock transfer details
  const orderLineRows = stockTransfer.orderLines.map((line) => ({
    id: line.productId,
    productName: productIdToNameMap[line.productId] || "Not Available",
    purchasedQuantity: line.purchasedQuantity,
    measurement: line.measurement,
  }));

  return (
    <Box m="20px">
      <Header title={`Stock Transfer ${stockTransfer.orderId} Details`} />
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
                name="orderType"
                label="Transfer Type"
                fullWidth
                variant="filled"
                InputProps={{
                  readOnly: true,
                  style: {
                    cursor: "not-allowed",
                  },
                }}
                error={touched.orderType && !!errors.orderType}
                helperText={touched.orderType && errors.orderType}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.orderType === "Not Available" ? "red" : "inherit",
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
                sx={{ gridColumn: "span 1" }}
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
                sx={{ gridColumn: "span 1" }}
                inputProps={{
                  style: {
                    color: values.orderTimeZone === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="originStoreName"
                label="Origin Store Name"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <StoreIcon />
                    </InputAdornment>
                  ),
                  readOnly: true,
                  style: {
                    cursor: "not-allowed",
                  },
                }}
                error={touched.originStoreName && !!errors.originStoreName}
                helperText={touched.originStoreName && errors.originStoreName}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.originStoreName === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="destinationStoreName"
                label="Destination Store Name"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <StoreIcon />
                    </InputAdornment>
                  ),
                  readOnly: true,
                  style: {
                    cursor: "not-allowed",
                  },
                }}
                error={touched.destinationStoreName && !!errors.destinationStoreName}
                helperText={touched.destinationStoreName && errors.destinationStoreName}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  style: {
                    color: values.destinationStoreName === "Not Available" ? "red" : "inherit",
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
                  readOnly: true,
                  style: {
                    cursor: "not-allowed",
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
                  readOnly: true,
                  style: {
                    cursor: "not-allowed",
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
                  marginTop: "10px",
                }}
              >
                <DataGrid
                  rows={orderLineRows}
                  columns={orderLineColumns}
                  pageSize={3}
                  rowsPerPageOptions={[3]}
                  disableSelectionOnClick
                  getRowId={(row) => row.id}
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

export default StockTransferDetails;
