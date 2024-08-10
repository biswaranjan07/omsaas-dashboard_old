import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockDataCustomerDetails, mockDataOrderDetails } from "../../data/mockData"; // Import both mockDataCustomerDetails and mockDataOrderDetails
import { Box, Typography, TextField, Button, useTheme, InputAdornment } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const CustomerDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { id } = useParams();
  const navigate = useNavigate();
  const customer = mockDataCustomerDetails.find(
    (customer) => customer.customerId === parseInt(id)
  );

  if (!customer) {
    return <Typography variant="h4">Customer not found</Typography>;
  }

  const initialValues = {
    customerName: customer.customerName || "Not Available",
    phoneNumber: customer.phoneNumber || "Not Available",
    email: customer.email || "Not Available",
    address1: customer.address1 || "Not Available",
    address2: customer.address2 || "Not Available",
    city: customer.city || "Not Available",
    state: customer.state || "Not Available",
    country: customer.country || "Not Available",
    pincode: customer.pincode || "Not Available",
  };

  const validationSchema = Yup.object({
    customerName: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    address1: Yup.string().required("Required"),
    address2: Yup.string(),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    pincode: Yup.string().required("Required"),
  });

  const handleSave = (values) => {
    // Handle save logic here, e.g., update the data source or make an API call
    console.log("Updated customer data:", values);
    alert("Customer details saved successfully!");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );
    if (confirmDelete) {
      const updatedCustomerDetails = [...mockDataCustomerDetails];
      const index = updatedCustomerDetails.findIndex(
        (customer) => customer.customerId === parseInt(id)
      );
      if (index !== -1) {
        updatedCustomerDetails.splice(index, 1);
        alert("Customer deleted successfully!");
        navigate("/customer");
      }
    }
  };

  const orderDetails = mockDataOrderDetails.filter(
    (order) => order.customerId === parseInt(id)
  );

  const columns = [
    {
      field: "orderId",
      headerName: "Order ID",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "storeId",
      headerName: "Store ID",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "orderDateTime",
      headerName: "Timestamp",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "omnichannel",
      headerName: "Omnichannel",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "omnichannelType",
      headerName: "Omnichannel Type",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "carrier",
      headerName: "Carrier",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
    {
      field: "carrierService",
      headerName: "Carrier Service",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value ? "inherit" : "red" }}>
          {params.value || "Not Available"}
        </span>
      ),
    },
  ];

  const handleRowClick = (params) => {
    navigate(`/orderDetails/${params.row.orderId}`);
  };

  return (
    <Box m="20px">
      <Header title={`${customer.customerName} Details`} />
      <Header subtitle={`Customer ID: ${customer.customerId}`} />
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
                name="phoneNumber"
                label="Contact"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: "span 1" }}
                inputProps={{
                  style: {
                    color: values.phoneNumber === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 1" }}
                inputProps={{
                  style: {
                    color: values.email === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="address1"
                label="Address 1"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
                inputProps={{
                  style: {
                    color: values.address1 === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="address2"
                label="Address 2"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
                inputProps={{
                  style: {
                    color: values.address2 === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="city"
                label="City"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: "span 1" }}
                inputProps={{
                  style: {
                    color: values.city === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="state"
                label="State"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.state && !!errors.state}
                helperText={touched.state && errors.state}
                sx={{ gridColumn: "span 1" }}
                inputProps={{
                  style: {
                    color: values.state === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="country"
                label="Country"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PublicIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.country && !!errors.country}
                helperText={touched.country && errors.country}
                sx={{ gridColumn: "span 1" }}
                inputProps={{
                  style: {
                    color: values.country === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
              <Field
                as={TextField}
                name="pincode"
                label="Pincode"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PinDropIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.pincode && !!errors.pincode}
                helperText={touched.pincode && errors.pincode}
                sx={{ gridColumn: "span 1" }}
                inputProps={{
                  style: {
                    color: values.pincode === "Not Available" ? "red" : "inherit",
                  },
                }}
              />
            </Box>
            <Box mt={4}>
              <Header subtitle="Order Details" sx={{ mt: 0 }} />
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
                  rows={orderDetails}
                  columns={columns}
                  pageSize={3}
                  rowsPerPageOptions={[3]}
                  disableSelectionOnClick
                  getRowId={(row) => row.orderId}
                  onRowClick={handleRowClick}
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

export default CustomerDetails;
