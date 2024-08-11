import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Collapse,
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StoreIcon from "@mui/icons-material/Store";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import {
  mockDataCustomerDetails,
  mockDataStoreDetails,
  omnichannel,
  fulfilment,
  carrier,
  carrierservice,
} from "../../data/mockData";

// Sample measurements array
const measurements = ["Units", "Dozen", "Kg", "g", "Pound (lb)"]; // Assuming this comes from the measurements JSON

const SalesOrderForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [customerDetailsExpanded, setCustomerDetailsExpanded] = useState(true);
  const [basicDetailsExpanded, setBasicDetailsExpanded] = useState(true);
  const [orderLines, setOrderLines] = useState([
    { itemId: "", requestedQuantity: "", measurement: "" },
  ]);

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/v1/salesOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, orderLines }),
      });
      if (response.ok) {
        alert("Sales order added successfully");
      } else {
        alert("Failed to add sales order");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  const customerNames = mockDataCustomerDetails.map(
    (customer) => customer.customerName
  );

  const storeNames = Array.from(
    new Set(mockDataStoreDetails.map((store) => store.storeName))
  );

  const handleAddOrderLine = () => {
    setOrderLines([...orderLines, { itemId: "", requestedQuantity: "", measurement: "" }]);
  };

  const handleRemoveOrderLine = (index) => {
    const newOrderLines = [...orderLines];
    newOrderLines.splice(index, 1);
    setOrderLines(newOrderLines);
  };

  const handleOrderLineChange = (index, field, value) => {
    const newOrderLines = [...orderLines];
    newOrderLines[index][field] = value;
    setOrderLines(newOrderLines);
  };

  return (
    <Box m="20px">
      <Button
        startIcon={customerDetailsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        onClick={() => setCustomerDetailsExpanded(!customerDetailsExpanded)}
        sx={{
          marginBottom: "10px",
          textTransform: "none", // Preserve case for "Customer Details"
          color: colors.greenAccent[500], // Match text color with "Create New Sales Order"
        }}
      >
        Customer Details
      </Button>
      <Collapse in={customerDetailsExpanded}>
        <Formik
          initialValues={{
            customerName: "",
            email: "",
            phoneNumber: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
          }}
          validationSchema={checkoutSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <Autocomplete
                  freeSolo
                  options={customerNames}
                  value={values.customerName}
                  onChange={(event, newValue) => {
                    setFieldValue("customerName", newValue || "");

                    // Find the selected customer and auto-populate fields
                    const selectedCustomer = mockDataCustomerDetails.find(
                      (customer) => customer.customerName === newValue
                    );

                    if (selectedCustomer) {
                      setFieldValue("email", selectedCustomer.email || "Not Available");
                      setFieldValue("phoneNumber", selectedCustomer.phoneNumber || "Not Available");
                      setFieldValue("address1", selectedCustomer.address1 || "Not Available");
                      setFieldValue("address2", selectedCustomer.address2 || "Not Available");
                      setFieldValue("city", selectedCustomer.city || "Not Available");
                      setFieldValue("state", selectedCustomer.state || "Not Available");
                      setFieldValue("country", selectedCustomer.country || "Not Available");
                      setFieldValue("pincode", selectedCustomer.pincode || "Not Available");
                    } else {
                      // Clear fields if a new customer name is entered
                      setFieldValue("email", "");
                      setFieldValue("phoneNumber", "");
                      setFieldValue("address1", "");
                      setFieldValue("address2", "");
                      setFieldValue("city", "");
                      setFieldValue("state", "");
                      setFieldValue("country", "");
                      setFieldValue("pincode", "");
                    }
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      variant="filled"
                      label="Customer Name"
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <>
                            <InputAdornment position="start">
                              <DriveFileRenameOutlineIcon />
                            </InputAdornment>
                            {params.InputProps.startAdornment}
                          </>
                        ),
                      }}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="customerName"
                      error={!!touched.customerName && !!errors.customerName}
                      helperText={touched.customerName && errors.customerName}
                    />
                  )}
                  sx={{ gridColumn: "span 4" }} // Ensure full span of 4 columns
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    gridColumn: "span 2",
                    input: {
                      color: values.email === "Not Available" ? "red" : "inherit",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  name="phoneNumber"
                  error={!!touched.phoneNumber && !!errors.phoneNumber}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  sx={{
                    gridColumn: "span 2",
                    input: {
                      color: values.phoneNumber === "Not Available" ? "red" : "inherit",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address 1"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                  name="address1"
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  sx={{
                    gridColumn: "span 4",
                    input: {
                      color: values.address1 === "Not Available" ? "red" : "inherit",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address 2"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address2}
                  name="address2"
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  sx={{
                    gridColumn: "span 4",
                    input: {
                      color: values.address2 === "Not Available" ? "red" : "inherit",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="City"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                  name="city"
                  error={!!touched.city && !!errors.city}
                  helperText={touched.city && errors.city}
                  sx={{
                    gridColumn: "span 1",
                    input: {
                      color: values.city === "Not Available" ? "red" : "inherit",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="State"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.state}
                  name="state"
                  error={!!touched.state && !!errors.state}
                  helperText={touched.state && errors.state}
                  sx={{
                    gridColumn: "span 1",
                    input: {
                      color: values.state === "Not Available" ? "red" : "inherit",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Country"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PublicIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.country}
                  name="country"
                  error={!!touched.country && !!errors.country}
                  helperText={touched.country && errors.country}
                  sx={{
                    gridColumn: "span 1",
                    input: {
                      color: values.country === "Not Available" ? "red" : "inherit",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Pincode"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PinDropIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.pincode}
                  name="pincode"
                  error={!!touched.pincode && !!errors.pincode}
                  helperText={touched.pincode && errors.pincode}
                  sx={{
                    gridColumn: "span 1",
                    input: {
                      color: values.pincode === "Not Available" ? "red" : "inherit",
                    },
                  }}
                />
              </Box>
            </form>
          )}
        </Formik>
      </Collapse>
      <Button
        startIcon={basicDetailsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        onClick={() => setBasicDetailsExpanded(!basicDetailsExpanded)}
        sx={{
          marginBottom: "10px",
          marginTop: "20px",
          textTransform: "none", // Preserve case for "Basic Details"
          color: colors.greenAccent[500], // Match text color with "Create New Sales Order"
        }}
      >
        Basic Details
      </Button>
      <Collapse in={basicDetailsExpanded}>
        <Formik
          initialValues={{
            storeName: "",
            omnichannel: "",
            fulfilment: "",
            carrier: "",
            carrierService: "",
          }}
          validationSchema={basicDetailsSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  select
                  label="Store Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <StoreIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.storeName}
                  name="storeName"
                  error={!!touched.storeName && !!errors.storeName}
                  helperText={touched.storeName && errors.storeName}
                  sx={{ gridColumn: "span 2" }}
                >
                  {storeNames.map((store) => (
                    <MenuItem key={store} value={store}>
                      {store}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  select
                  label="Omnichannel"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SyncAltIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.omnichannel}
                  name="omnichannel"
                  error={!!touched.omnichannel && !!errors.omnichannel}
                  helperText={touched.omnichannel && errors.omnichannel}
                  sx={{ gridColumn: "span 2" }}
                >
                  {omnichannel.map((channel) => (
                    <MenuItem key={channel} value={channel}>
                      {channel}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  select
                  label="Fulfilment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AssignmentIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fulfilment}
                  name="fulfilment"
                  error={!!touched.fulfilment && !!errors.fulfilment}
                  helperText={touched.fulfilment && errors.fulfilment}
                  sx={{ gridColumn: "span 2" }}
                >
                  {fulfilment.map((method) => (
                    <MenuItem key={method} value={method}>
                      {method}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  select
                  label="Carrier"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalShippingIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.carrier}
                  name="carrier"
                  error={!!touched.carrier && !!errors.carrier}
                  helperText={touched.carrier && errors.carrier}
                  sx={{ gridColumn: "span 1" }}
                >
                  {carrier.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  select
                  label="Carrier Service"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.carrierService}
                  name="carrierService"
                  error={!!touched.carrierService && !!errors.carrierService}
                  helperText={touched.carrierService && errors.carrierService}
                  sx={{ gridColumn: "span 1" }}
                >
                  {carrierservice.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </form>
          )}
        </Formik>
      </Collapse>

      {/* Orderline Details Section */}
      <Box mt="20px">
        <Box
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            color: colors.greenAccent[500],
            marginBottom: "10px",
            textTransform: "none",
          }}
        >
          Orderline Details
        </Box>
        <TableContainer component={Paper} sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: colors.blueAccent[500], color: "white" }}>Item Id</TableCell>
                <TableCell sx={{ backgroundColor: colors.blueAccent[500], color: "white" }}>Requested Quantity</TableCell>
                <TableCell sx={{ backgroundColor: colors.blueAccent[500], color: "white" }}>Measurement</TableCell>
                <TableCell sx={{ backgroundColor: colors.blueAccent[500], color: "white" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderLines.map((line, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                    <TextField
                      fullWidth
                      variant="filled"
                      value={line.itemId}
                      onChange={(e) =>
                        handleOrderLineChange(index, "itemId", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                    <TextField
                      fullWidth
                      variant="filled"
                      value={line.requestedQuantity}
                      onChange={(e) =>
                        handleOrderLineChange(index, "requestedQuantity", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                    <FormControl fullWidth variant="filled">
                      <Select
                        value={line.measurement}
                        onChange={(e) =>
                          handleOrderLineChange(index, "measurement", e.target.value)
                        }
                      >
                        {measurements.map((measurement, idx) => (
                          <MenuItem key={idx} value={measurement}>
                            {measurement}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                    <IconButton
                      color="secondary"
                      onClick={() => handleAddOrderLine()}
                    >
                      <AddCircleIcon />
                    </IconButton>
                    {orderLines.length > 1 && (
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveOrderLine(index)}
                      >
                        <RemoveCircleIcon />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box display="flex" justifyContent="end" mt="20px">
        <Button type="submit" color="secondary" variant="contained">
          Add New Sales Order
        </Button>
      </Box>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const pinRegExp = /^(\d{4}|\d{6})$/;

const checkoutSchema = yup.object().shape({
  customerName: yup.string().required("Required"),
  email: yup
    .string()
    .test(
      "is-valid-email",
      "Invalid Email",
      (value) =>
        value === "Not Available" ||
        value === "" ||
        yup.string().email().isValidSync(value)
    ),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  address1: yup.string(),
  address2: yup.string(),
  city: yup.string(),
  state: yup.string(),
  country: yup.string(),
  pincode: yup.string().matches(pinRegExp, "Pincode is not valid"),
});

const basicDetailsSchema = yup.object().shape({
  storeName: yup.string().required("Required"),
  omnichannel: yup.string().required("Required"),
  fulfilment: yup.string().required("Required"),
  carrier: yup.string().required("Required"),
  carrierService: yup.string().required("Required"),
});

export default SalesOrderForm;
