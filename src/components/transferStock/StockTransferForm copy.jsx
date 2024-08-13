import {
  Box,
  Button,
  TextField,
  InputAdornment,
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
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StoreIcon from "@mui/icons-material/Store";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import {
  mockDataStoreDetails,
  carrier,
  carrierservice,
  transferType,
  measurements,
} from "../../data/mockData";

const StockTransferForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [orderLines, setOrderLines] = useState([
    { productId: "", requestedQuantity: "", measurement: "" },
  ]);

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/v1/stockTransfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, orderLines }),
      });
      if (response.ok) {
        alert("Stock transfer added successfully");
      } else {
        alert("Failed to add stock transfer");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  const storeNames = Array.from(
    new Set(mockDataStoreDetails.map((store) => store.storeName))
  );

  const handleAddOrderLine = () => {
    setOrderLines([
      ...orderLines,
      { productId: "", requestedQuantity: "", measurement: "" },
    ]);
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
      <Box
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          color: colors.greenAccent[500],
          marginBottom: "10px",
          textTransform: "none",
        }}
      >
        Basic Details
      </Box>
      <Formik
        initialValues={{
          transferType: "",
          origin: "",
          destination: "",
          carrier: "",
          carrierService: "",
          unitSalvagePrice: "",
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
                label="Transfer Type"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SyncAltIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.transferType}
                name="transferType"
                error={!!touched.transferType && !!errors.transferType}
                helperText={touched.transferType && errors.transferType}
                sx={{ gridColumn: "span 4" }}
              >
                {transferType.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                select
                label="Origin"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <StoreIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.origin}
                name="origin"
                error={!!touched.origin && !!errors.origin}
                helperText={touched.origin && errors.origin}
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
                label="Destination"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <StoreIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.destination}
                name="destination"
                error={!!touched.destination && !!errors.destination}
                helperText={touched.destination && errors.destination}
                sx={{ gridColumn: "span 2" }}
              >
                {storeNames.concat("Others").map((store) => (
                  <MenuItem key={store} value={store}>
                    {store}
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
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
              >
                {carrierservice.map((service) => (
                  <MenuItem key={service} value={service}>
                    {service}
                  </MenuItem>
                ))}
              </TextField>
              {values.transferType === "Salvage" && (
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Unit Salvage Price"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CurrencyExchangeIcon />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.unitSalvagePrice}
                  name="unitSalvagePrice"
                  error={
                    !!touched.unitSalvagePrice && !!errors.unitSalvagePrice
                  }
                  helperText={
                    touched.unitSalvagePrice && errors.unitSalvagePrice
                  }
                  sx={{ gridColumn: "span 4" }}
                />
              )}
            </Box>
          </form>
        )}
      </Formik>

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
                <TableCell
                  sx={{
                    backgroundColor: colors.blueAccent[500],
                    color: "white",
                  }}
                >
                  Product Id
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: colors.blueAccent[500],
                    color: "white",
                  }}
                >
                  Requested Quantity
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: colors.blueAccent[500],
                    color: "white",
                  }}
                >
                  Measurement
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: colors.blueAccent[500],
                    color: "white",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderLines.map((line, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                    <TextField
                      fullWidth
                      variant="filled"
                      value={line.productId}
                      onChange={(e) =>
                        handleOrderLineChange(index, "productId", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                    <TextField
                      fullWidth
                      variant="filled"
                      value={line.requestedQuantity}
                      onChange={(e) =>
                        handleOrderLineChange(
                          index,
                          "requestedQuantity",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                    <FormControl fullWidth variant="filled">
                      <Select
                        value={line.measurement}
                        onChange={(e) =>
                          handleOrderLineChange(
                            index,
                            "measurement",
                            e.target.value
                          )
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
          Add New Stock Transfer
        </Button>
      </Box>
    </Box>
  );
};

const basicDetailsSchema = yup.object().shape({
  transferType: yup.string().required("Required"),
  origin: yup.string().required("Required"),
  destination: yup.string().required("Required").test(
    "not-same",
    "Origin and Destination cannot be the same",
    function (value) {
      return this.parent.origin !== value;
    }
  ),
  carrier: yup.string().required("Required"),
  carrierService: yup.string().required("Required"),
  unitSalvagePrice: yup
    .number()
    .min(0, "Unit Salvage Price must be non-negative")
    .when("transferType", {
      is: "Salvage",
      then: (schema) => schema.required("Unit Salvage Price is required"),
    }),
});

export default StockTransferForm;
